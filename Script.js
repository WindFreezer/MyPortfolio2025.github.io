// JavaScript for toggling active tabs
document.addEventListener('DOMContentLoaded', (event) => {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.getAttribute('data-tab');

            tabLinks.forEach(link => link.classList.remove('active-link'));
            tabContents.forEach(content => content.classList.remove('active-tab'));

            link.classList.add('active-link');
            document.getElementById(targetTab).classList.add('active-tab');
        });
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-x');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    closeIcon.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
