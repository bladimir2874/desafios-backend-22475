const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const PORT = process.env.PORT || 8080;
const app = express();
const httServer = new HttpServer(app);
const io = new IOServer(httServer);
// Middlewares
app.use(express.static('./public'));
const connecteServer = httServer.listen(PORT, () => {
  console.log('Serve is up and running on port: ', PORT);
});
connecteServer.on('error', (error) => {
  console.log(error.message);
});

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado!');
  socket.id
  socket.on('message', (data) => {
    io.emit('messages', data);
  })
});

// Sockets
// io.on('connection', (socket) => {
//   console.log('User connected!');
//   socket.emit('server-message', "This message comes from the server!");


//   socket.on('confirmation', (data) => {
//     console.log('Got it!');
//   })
// });

