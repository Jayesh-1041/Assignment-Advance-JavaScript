document.getElementById('email').addEventListener('input', function () {
  const email = this.value;
  const message = document.getElementById('message');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (email === '') {
      message.textContent = 'Email cannot be empty';
      message.className = 'invalid';
  } else if (email.length > 254) {
      message.textContent = 'Email is too long';
      message.className = 'invalid';
  } else if (email.includes('..')) {
      message.textContent = 'Email cannot contain consecutive dots';
      message.className = 'invalid';
  } else if (!emailPattern.test(email)) {
      message.textContent = 'Invalid email';
      message.className = 'invalid';
  } else {
      message.textContent = 'Valid email';
      message.className = 'valid';
  }
});

document.getElementById('email1').addEventListener('input', function () {
  const email1 = this.value;
  const address = document.getElementById('address');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (email1.includes('256')) {
      address.textContent = 'Invalid email';
      address.className = 'invalid';
  } else if (email1.includes('..')) {
      address.textContent = 'Invalid email';
      address.className = 'invalid';
  } else if (!emailPattern.test(email1)) {
    address.textContent = 'Invalid email';
    address.className = 'Invalid';
} else {
  address.textContent = 'Valid email';
  address.className = 'valid';
}
});

document.getElementById('email2').addEventListener('input', function () {
  const email2 = this.value;
  const message2 = document.getElementById('message2');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email2)) {
      message2.textContent = 'Invalid email';
      message2.className = 'invalid';
  } else {
      message2.textContent = 'Valid email';
      message2.className = 'valid';
  }
});


