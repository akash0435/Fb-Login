const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }

  // You can add your own logic here for handling the form submission.
  console.log('Email:', email);
  console.log('Password:', password);

  // Clear the form fields after successful submission.
  loginForm.reset();
});