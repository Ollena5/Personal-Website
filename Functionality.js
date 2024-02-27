document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
