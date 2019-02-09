const express = require('express');
const createError = require('http-errors');
const Item = require('./../models/Item');
const User = require('./../models/User');
const Chat = require('./../models/Chat');

const router = express.Router();

// GET items
router.get('/items', (req, res, next) => {
  /* Description: This GET request gets an array of items in the area
   *
   */

  const {
    id: userId,
    categories,
    location,
    range,
    page,
  } = req.query;

  if (!userId || !categories || !location || !range || !page) {
    return next(createError(400, 'You did not send us the stuff we needed.'));
  }

  const options = {
    available: true,
    category: {
      $in: categories,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: location,
        },
        $maxDistance: range * 1609.344,
      },
    },
    blacklisted_by: {
      $ne: userId,
    },
  };

  Item.find(options).sort('_id').limit(10).skip(10 * (page - 1))
    .exec((err, items) => {
      if (err) return next(createError(500, err));
      return res.send(items);
    });
});

// POST blacklist an item
router.post('/blacklist', (req, res, next) => {
  const { id: userId, itemId } = req.body;
  if (!userId || !itemId) return res.send(400);

  Item.update({ _id: itemId }, { $push: { blacklisted_by: userId } }, (err) => {
    if (err) return next(createError(500, err));
    return res.send(200);
  });
});

// POST ask to get an item
router.post('/ask', (req, res, next) => {
  const { id: userId, itemId, message: messageContent } = req.body;
  if (!userId || !itemId || !messageContent) {
    return next(createError(400, 'Not enough information'));
  }

  const now = Date.now();
  const messageObject = {
    timestamp: now,
    message: messageContent,
    sender_type: 'user',
  };

  Item.findById(itemId, (err, item) => {
    if (err) return next(createError(500, err));
    const donorId = item.donor_id;
    const options = {
      donor_id: donorId,
      user_id: userId,
      item_id: itemId,
      messages: [messageObject],
      last_message_sent: now,
    };
    Chat.create(options, (error) => {
      // If there is an error, send 500 for database error
      if (error) return next(createError(500, err));

      // Otherwise, everything is good
      return res.send(200);
    });
  });
});

// POST create a user
router.post('/new', (req, res, next) => {
  // Get information
  const { email, firstName, lastName } = req.body;

  // Make sure everything is there
  if (!email || !firstName || !lastName) return res.send(400);

  // Create user object
  const options = {
    _id: email,
    firstName,
    lastName,
  };

  // Create user object in database
  User.create(options, (err) => {
    // If there is an error, send 500 for database error
    if (err) return next(createError(500, err));

    // Otherwise, everything is good
    return res.send(200);
  });
});

router.get('/chats', (req, res, next) => {
  const { id: userId } = req.query;
  if (!userId) return next(createError(400, 'Bad API Call'));

  Chat.aggregate([
    {
      $match: {
        user_id: userId,
      },
    },
    {
      $lookup: {
        from: 'donors',
        localField: 'donor_id',
        foreignField: '_id',
        as: 'donor',
      },
    },
    {
      $lookup: {
        from: 'items',
        localField: 'item_id',
        foreignField: '_id',
        as: 'item',
      },
    },
    {
      $sort: {
        last_message_sent: -1,
      },
    },
  ]).exec().then((chats) => {
    res.send(chats.map((chat) => {
      chat.messages.sort((a, b) => b.timestamp - a.timestamp);
      return {
        _id: chat._id,
        itemName: chat.item[0].name,
        firstName: chat.donor[0].firstName,
        lastMessage: {
          timestamp: chat.messages[0].timestamp,
          message: chat.messages[0].message,
        },
      };
    }));
  }).catch(err => next(createError(500, err)));
});

module.exports = router;
