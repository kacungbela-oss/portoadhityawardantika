// Mengatur fungsionalitas menu hamburger untuk perangkat mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu saat salah satu link diklik agar tidak menutupi layar
document.querySelectorAll('.nav-links li a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));