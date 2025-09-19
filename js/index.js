const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const headerNav = document.querySelector('.nav');
const headerList = document.querySelector('.list');

let openMenu = false;

menuBtn.addEventListener('click', ()=> {
    if(!openMenu) {
        burger.classList.add('open');
        headerNav.classList.add('open');
        headerList.classList.add('open');

        openMenu = true;
    }
    else {
        burger.classList.remove('open');
        headerNav.classList.remove('open');
        headerList.classList.remove('open');

        openMenu = false;
    }
})