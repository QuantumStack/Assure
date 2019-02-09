const express = require('express');
const createError = require('http-errors');
const { ObjectId } = require('mongoose').Types;
const fs = require('fs');
const path = require('path');

const router = express.Router();

const Donor = require('./../models/Donor');
const Item = require('./../models/Item');
const Chat = require('./../models/Chat');

// POST create a donor
router.post('/new', (req, res, next) => {
  const { email, firstName, lastName } = req.body;
  if (!email || !firstName || !lastName) {
    return res.send(400);
  }

  Donor.create({ _id: email, firstName, lastName }, (err) => {
    if (err) return next(createError(500, err));
    return res.send(200);
  });
});

// POST create new item
router.post('/item/new', (req, res, next) => {
  const {
    id, name, location: coords, description, pictures, category,
  } = req.body;

  if (!name || !coords || !category) {
    return res.send(400);
  }

  const newItem = {
    name,
    location: {
      type: 'Point',
      coordinates: coords,
    },
    description,
    pictures: [],
    donor_id: id,
    category,
    blacklisted_by: [],
    available: true,
  };

  Item.create(newItem, (err, item) => {
    if (err) return next(createError(500, err));
    const filenames = [];
    for (let i = 0; i < pictures.length; i += 1) {
      const ext = pictures[i].type.slice(pictures[i].type.indexOf('/') + 1);
      const filename = `public/images/${item._id}-${i}.${ext}`;
      filenames.push(filename);
      const data = pictures[i].data.replace(/^data:image\/\w+;base64,/, '');
      const buf = new Buffer(data, 'base64');
      fs.writeFileSync(path.resolve(filename), buf);
    }
    Item.update({ _id: item._id }, { pictures: filenames }, (saveErr) => {
      if (saveErr) return next(createError(500, saveErr));
      return res.send(200);
    });
  });
});

// GET chats associated with an item
router.get('/item/chats', (req, res, next) => {
  const itemId = ObjectId(req.query.itemId);
  if (!itemId) return next(createError(400, 'Bad API Call'));

  Chat.aggregate([
    {
      $match: {
        item_id: itemId,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user',
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
        firstName: chat.user[0].firstName,
        lastMessage: {
          timestamp: chat.messages[0].timestamp,
          message: chat.messages[0].message,
        },
      };
    }));
  }).catch(err => next(createError(500, err)));
});

// POST make  item unavailable
router.post('/item/unavailable', (req, res, next) => {
  const { id, itemId, userId } = req.body;

  if (!id || !itemId) return next(createError(400, 'Bad API Call'));

  Item.findByIdAndUpdate(itemId, { available: false, donated_on: Date.now() })
    .then(() => {
      if (userId) {
        Item.findByIdAndUpdate(itemId, { donated_to: userId })
          .then(res.send(200));
      } else {
        res.send(200);
      }
    });
});

// GET active items associated with a donorId
router.get('/items', (req, res, next) => {
  const { id: donorId } = req.query;

  if (!donorId) return next(createError(400, 'No Donor ID'));

  Item.aggregate([
    {
      $match:
        {
          donor_id: donorId,
          available: true,
        },
    },
    {
      $lookup:
        {
          from: 'chats',
          localField: '_id',
          foreignField: 'item_id',
          as: 'count',
        },
    },
  ]).then((items) => {
    items.forEach((item) => {
      item.count = item.count.length;
    });
    items.sort((a, b) => b.count - a.count);
    return res.send(items);
  }).catch(err => next(createError(500, err)));
});

module.exports = router;
