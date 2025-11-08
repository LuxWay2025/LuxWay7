// Smooth scroll for internal links
document.addEventListener('click', function(e){
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    const href = e.target.getAttribute('href');
    document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// simple reveal on scroll
function reveal(){
  document.querySelectorAll('.fade-up').forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.top < (window.innerHeight - 60)){
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// contact form demo: show a toast with data and clear form
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name=name]').value;
  const phone = form.querySelector('[name=phone]').value;
  const route = form.querySelector('[name=route]').value;
  const msg = form.querySelector('[name=message]').value;
  alert('Дякуємо, '+name+'!\\n\\nМи отримали ваш запит:\\nТелефон: '+phone+'\\nМаршрут: '+route+'\\nПовідомлення: '+msg+'\\n\\nНезабаром з вами зв\'яжеться наш менеджер.');
  form.reset();
}
