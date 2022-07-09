const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // check email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email');
    return;
  }
  // check password
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  } else if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  } else {
    alert('Sign up successful');
    window.location.reload();
  }
});
