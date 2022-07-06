import { io } from 'socket.io-client';

const form = document.querySelector('form');

const socket = io('http://localhost:3000');
socket.on('connect', () => { 
  displayMessage(`You are connected with id: ${socket.id}`);
 })

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.querySelector('input');
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    alert('Message cannot be empty');
  } else {
    displayMessage(inputValue);
    input.value = '';
  }
});

const displayMessage = message => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = message;
  ul.appendChild(li);
};
