const menuEmail = document.querySelector('.nav_rigth_ul_email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

const menuBorgusa = document.querySelector('.nav_menuicon');
const mobileMenu = document.querySelector('.mobile-menu');
const mainContiner = document.querySelector('.main-cantainer');

menuBorgusa.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    mainContiner.classList.toggle('inactive');
});

const cartBtn = document.querySelector('.nav_rigth_ul_cart');
const cartDetail = document.querySelector('.cart-detail');

cartBtn.addEventListener('click', () => {
    cartDetail.classList.toggle('inactive');
});

