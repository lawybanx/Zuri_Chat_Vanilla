const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const input = document.querySelector('input');
  const inputValue = input.value;
  const ul = document.querySelector('ul');

  if (inputValue === null || inputValue === '') {
    alert('Please enter a value');
  } else {
    const li = document.createElement('li');
    li.textContent = inputValue;
    ul.appendChild(li);
    input.value = '';
  }
});
