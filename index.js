const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.querySelector('input');
  const inputValue = input.value;

  if (inputValue.trim() === '') {
    alert('Message cannot be empty');
  } else {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = inputValue;
    ul.appendChild(li);
    input.value = '';
  }
});
