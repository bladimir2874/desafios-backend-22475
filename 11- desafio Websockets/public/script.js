// Socket Client

// socket.on('server-message', (data) => {
//   alert(data);
//   socket.emit('confirmation', 'Message received!');
// });

const socket = io('http://localhost:8080');
const input = document.querySelector('#chat-input');
input.addEventListener('input', () => {
  socket.emit('message', input.value);
});

socket.on('messages', (data) => {
  document.querySelector('#chat-box').innerText = data;
});