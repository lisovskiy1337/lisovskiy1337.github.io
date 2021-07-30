'use strict';

new WOW().init();


const burger = document.querySelector('.header__burger'),
    nav = document.querySelector('.nav'),
    slideBtn = document.querySelectorAll('.home__buttons-btn');


const toggleNav = () => {

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        nav.classList.toggle('nav-active');
    });
};

toggleNav();



$(".sl-list-btn").on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
});