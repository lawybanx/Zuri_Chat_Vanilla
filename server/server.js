const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  console.log(socket.id);
  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
  // socket.on('chat message', msg => {
  //   console.log('message: ' + msg);
  //   io.emit('chat message', msg);
  // });
});
