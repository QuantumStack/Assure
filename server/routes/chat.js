const express = require('express');
const createError = require('http-errors');

const router = express.Router();

const Chat = require('./../models/Chat');
const Donor = require('./../models/Donor');
const User = require('./../models/User');

router.get('/', (req, res, next) => {
  const { id: chatId } = req.query;

  Chat.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'user_id',
        foreignField: '_id',
        as: 'user',
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
      $sort: {
        last_message_sent: -1,
      },
    },
  ]).exec().then((chats) => {
    res.send(chats[0]);
  }).catch(err => next(createError(500, err)));
});

module.exports = router;
