import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

let slidesPerVIew = 3;

if (window.screen.width <= 570){
    slidesPerVIew = 1
}

console.log(window.screen.width <= 570)
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: slidesPerVIew,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
