javascript
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('message');

  if (user === 'admin' && pass === '1234') {
    msg.style.color = 'green';
    msg.textContent = 'Login successful!';
  } else {
    msg.style.color = 'red';
    msg.textContent = 'Invalid credentials.';
  }
}