const navitem = document.querySelectorAll('.navitem');
const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
let menuOpen = false;
navbarLinks.classList.remove('active');

// navitem.forEach(item => item.addEventListener('click', navCurrent))

// function navCurrent() {
//     this.classList.toggle('current');
// }

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

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.navbar');
    nav.classList.toggle('sticky', window.scrollY > 200);
});