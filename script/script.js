const navbar = document.getElementById('navbar');
const infra = document.querySelector('.infra');
        
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-900', 'py-3','text-white', 'shadow-lg');
        infra.classList.add('text-white');
        navbar.classList.remove('bg-transparent', 'py-4', 'text-black');
    } else {
        navbar.classList.remove('bg-slate-900', 'py-3', 'text-white', 'shadow-lg');
        infra.classList.remove('text-white');
        navbar.classList.add('bg-transparent','text-slate-900', 'py-4');
        infra.classList.add('text-slate-900');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('translate-x-full')) {
        mobileMenu.classList.remove('translate-x-full');
    } else {
        mobileMenu.classList.add('translate-x-full');
    }

    overlay.classList.toggle('hidden');
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });
});