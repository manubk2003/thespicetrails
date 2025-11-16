// WhatsApp number
const PHONE = "+918971736524";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hello, I want to order cardamom / pepper. Please share price & pack sizes."
);

document.addEventListener("DOMContentLoaded", () => {
  // current year
  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // universal open WA function
  const openWA = (msg) => {
    const url = `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank");
  };

  // hero button
  const heroBtn = document.getElementById("order-now-hero");
  if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openWA("Hello, I'm interested in Cardamom / Pepper.");
    });
  }

  // product buttons
  const cardamomBtn = document.getElementById("order-cardamom");
  if (cardamomBtn) {
    cardamomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openWA("Hello, I'd like to order Cardamom.");
    });
  }

  const pepperBtn = document.getElementById("order-pepper");
  if (pepperBtn) {
    pepperBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openWA("Hello, I'd like to order Pepper.");
    });
  }

  // whatsapp link in footer
  const phoneElem = document.getElementById("whatsapp-number");
  if (phoneElem) {
    phoneElem.href = `https://wa.me/${PHONE.replace(/\D/g, "")}`;
    phoneElem.textContent = PHONE;
  }

  // scroll animations (safe mode)
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      io.observe(el);
    });
  }
});
