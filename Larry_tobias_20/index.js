const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
let menuOpen = false;
navbarLinks.classList.remove('active');

toggleBtn.addEventListener('click', () => {
    if (!menuOpen) {
        toggleBtn.classList.add('open');
        navbarLinks.classList.add('active');
        menuOpen = true;
    } else {
        toggleBtn.classList.remove('open');
        navbarLinks.classList.remove('active');
        menuOpen = false;
    }
});