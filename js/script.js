// control nav functions
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

window.addEventListener('DOMContentLoaded', event => {
    let navActive = function () {
    const navVanish = document.body.querySelector('.nav-vanish');
    if (!navVanish) {
    return;
    }
    if (window.scrolly === 0 ) {
    navVanish.classList.remove('nav-vanish');

    } else { 
        navVanish.classList.add('nav-vanish');
    }
};

navActive(); 

const mainNavBar = document.body.querySelector('#main-nav-bar');
if (!mainNavBar) {
    new bootstrap.ScrollSpy(document.body, { 
        target: '#main-nav-bar',
        offset: 60,
    });
};

const navToggle = document.body.querySelector('.navbar-toggler');
const reactiveNavItems = [].slice.call(document.querySelectorAll('#reactive-nav-items a .nav-link'));

// eslint-disable-next-line array-callback-return
reactiveNavItems.map(function (reactiveNavItem) {
    reactiveNavItem.addEventListener('click', () => {
if (window.getComputedStyle(navToggle).display !== 'none') {
navToggle.click();
}
});

});

});




