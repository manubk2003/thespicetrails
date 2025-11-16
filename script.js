// small script: mobile nav toggle & WA link helper
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.querySelector('#nav-toggle');
  const links = document.querySelector('.navlinks');
  if(toggle){
    toggle.addEventListener('click', ()=> links.style.display = links.style.display === 'flex' ? 'none' : 'flex');
  }
});

// generate WhatsApp link for order buttons (data-phone, data-prod)
function waOrder(phone, productName){
  const base = 'https://wa.me/' + phone.replace(/\D/g,''); // ensure digits only
  const text = encodeURIComponent(`Hi! I want to order "${productName}" from The Spice Trails.`);
  return `${base}?text=${text}`;
}
