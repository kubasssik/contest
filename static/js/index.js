import { showCountdown } from './countdown.js';
import { showRightMenu } from './aside-right.js';
import { dotMenu } from './mobile-menu.js';
import { showPopUpMenuMobile } from './pop-up-all.js';

/****--------------Все сплывающие меню---------------****/
showPopUpMenuMobile()

    /****--------------Обратный отчет. Таймер---------------****/
    showCountdown()

/****-------------- Дот меню ---------------****/
const $dotMenu = document.querySelectorAll('.dot-menu');
$dotMenu.forEach(e => e.addEventListener('click', dotMenu));

/****--------------Правая панел: фильтр, топ учатников d_n---------------****/
const $asideHeaderDrop = document.querySelectorAll('.aside-header-drop');
$asideHeaderDrop.forEach(e => {
    e.addEventListener('click', showRightMenu);
});

/****--------------Скролл окна ---------------****/
const $header = document.querySelector('.header')

window.addEventListener('scroll', ev => {
    scrollY > 0 && $header.classList.add('header-fixed')
    scrollY === 0 && $header.classList.remove('header-fixed')
})




document.querySelectorAll('#withdraw-money').forEach(e =>{
    e.addEventListener('click', function(){
        const el = this.parentElement.parentElement.parentElement.parentElement;
        el.classList.add('d_n')
    })
    })


