const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.navbar-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});