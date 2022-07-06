import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  displayMessage(`You are connected with id: ${socket.id}`);
});

socket.on('chat message', message => {
  displayMessage(message);
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.querySelector('input');
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    return;
  } else {
    displayMessage(inputValue);
    socket.emit('chat message', inputValue);

    input.value = '';
  }
});

const displayMessage = message => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = message;
  ul.appendChild(li);
};
