const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
  const bookingDate = bookingForm.querySelector('input[name="date"]');
  if (bookingDate) {
    bookingDate.min = new Date().toISOString().split('T')[0];
  }

  bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
    const formData = new FormData(bookingForm);
    const message = [
      'Hello Yaya Pizzeria, I would like to check table availability.',
      `Date: ${formData.get('date')}`,
      `Time: ${formData.get('time')}`,
      `Guests: ${formData.get('guests')}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/254714835853?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  });
}
