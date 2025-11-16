// small helper for the WhatsApp number — update if needed
const PHONE = "+918971736524"; // <-- replace if different format (country code required)
const DEFAULT_MESSAGE = encodeURIComponent("Hello, I want to order cardamom / pepper. Please share price & pack sizes.");

// order buttons
document.addEventListener('DOMContentLoaded', () => {
  // set current year
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;

  // hero order button
  const heroBtn = document.getElementById('order-now-hero');
  heroBtn && heroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `https://wa.me/${PHONE.replace(/\D/g,'')}?text=${DEFAULT_MESSAGE}`;
    window.open(url, '_blank');
  });

  // product buttons
  document.getElementById('order-cardamom')?.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = encodeURIComponent("Hello, I'd like to order Cardamom (please share price and minimum quantity).");
    const url = `https://wa.me/${PHONE.replace(/\D/g,'')}?text=${msg}`;
    window.open(url, '_blank');
  });
  document.getElementById('order-pepper')?.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = encodeURIComponent("Hello, I'd like to order Pepper (please share price and minimum quantity).");
    const url = `https://wa.me/${PHONE.replace(/\D/g,'')}?text=${msg}`;
    window.open(url, '_blank');
  });

  // attach phone link
  const phoneElem = document.getElementById('whatsapp-number');
  if (phoneElem) {
    phoneElem.href = `https://wa.me/${PHONE.replace(/\D/g,'')}`;
    phoneElem.textContent = PHONE;
  }

  // intersection observer for scroll animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
});
