const WebSocketServer = require('ws').Server;
const Chat = require('./models/Chat');

const wss = new WebSocketServer({ port: 40510 });
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const {
      id: chatId, message: content, user_id, donor_id, timestamp,
    } = JSON.parse(message);
    if (!user_id && !donor_id) return;
    let sender_type = 'user';
    if (donor_id) sender_type = 'donor';
    Chat.findOne({ _id: chatId }, (err, chat) => {
      if (!err && chat) {
        const messageObj = {
          message: content,
          user_id,
          donor_id,
          timestamp,
          sender_type,
        };
        chat.messages.push();
        chat.last_message_sent = timestamp;
        chat.save(messageObj).then(() => {
          try {
            ws.send(JSON.stringify({
              id: chatId,
              ...messageObj,
            }));
          } catch (sendErr) {
            console.error(sendErr);
          }
        }).catch(console.error);
      }
    });
  });
});
