// JavaScript to toggle the dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleBtn.addEventListener('click', function () {
        navbarMenu.classList.toggle('open');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const positiveButton = document.querySelector('.faq .info .positive');
    const negativeButton = document.querySelector('.faq .info .negative');
    const paragraph = document.querySelector('.faq .info p');

    positiveButton.addEventListener('click', function() {
        paragraph.style.display = 'block';
    });

    negativeButton.addEventListener('click', function() {
        paragraph.style.display = 'none';
    });
});
