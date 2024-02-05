const form = document.querySelector('form');
const portfolio = document.querySelector('#portfolio');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();

  if (!isValidEmail(email) || !isValidPhone(phone)) {
    const error = document.querySelector('#error');
    error.textContent = 'Please enter a valid email and phone number.';
    return;
  }

  const designs = [
    'design1.jpg',
    'design2.jpg',
    'design3.jpg',
    'design4.jpg',
    'design5.jpg'
  ];

  const design = designs[Math.floor(Math.random() * designs.length)];

  portfolio.innerHTML = `
    <h2>${name}'s Portfolio</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <img src="${design}" alt="Portfolio Design">
  `;
});

function isValidEmail(email) {
  // Use a regular expression to check if the email is valid.
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isValidPhone(phone) {
  // Use a regular expression to check if the phone number is valid.
  return /^\d{10}$/.test(phone);
}
