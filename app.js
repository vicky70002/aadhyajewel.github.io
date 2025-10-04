// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      const el=document.querySelector(id);
      if(el){
        const y=el.getBoundingClientRect().top+window.scrollY-56;
        window.scrollTo({top:y,behavior:'smooth'});
      }
    }
  });
});

// Testimonials slider
const slides=[...document.querySelectorAll('.testi__slide')];
let i=0;
function show(k){
  slides.forEach((s,idx)=>s.classList.toggle('active',idx===k));
}
function next(){i=(i+1)%slides.length;show(i)}
function prev(){i=(i-1+slides.length)%slides.length;show(i)}
document.getElementById('next').addEventListener('click',next);
document.getElementById('prev').addEventListener('click',prev);
setInterval(next,5000);

// Simple cart stub
const cart=[];
document.querySelectorAll('.add-to-cart').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item={name:btn.dataset.name,price:+btn.dataset.price,qty:1};
    cart.push(item);
    alert(`Added: ${item.name} (₹${item.price})`);
  });
});

// Footer year
document.getElementById('y').textContent=new Date().getFullYear();

// Contact form (placeholder no-backend)
const form=document.getElementById('contact-form');
const statusEl=document.querySelector('.form-status');
form.addEventListener('submit',async(e)=>{
  e.preventDefault();
  statusEl.textContent='Submitting...';
  // Replace with Formspree endpoint in form.action for real submissions
  await new Promise(r=>setTimeout(r,600));
  form.reset();
  statusEl.textContent='Thanks! We will get back soon.';
});
