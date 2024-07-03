
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', { origin:'top' });
ScrollReveal().reveal('.home-img , .contact form , .experience-container', { origin:'bottom' });
ScrollReveal().reveal('.home-contact h1 , .about-img ', { origin:'left' });
ScrollReveal().reveal('.home-contact p , .about-content', { origin:'right' });


const typed =new Typed('.multiple-text',{
    strings:['Software Engineer ', 'Web Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});