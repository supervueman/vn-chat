const socket = require('socket.io');

module.exports = (server) => {
  const io = socket(server);

  io.origins(process.env.CORS_ACCESS_URL.split(', '));

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
