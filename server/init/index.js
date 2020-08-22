const socket = require('socket.io');

module.exports = (server) => {
  const io = socket(server);

  io.origins(['http://localhost:8080']);

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
