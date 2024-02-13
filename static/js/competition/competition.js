import { dotMenu } from '../mobile-menu.js';
import { showPopUpMenuMobile } from './pop-up-all.js'; //из роддителя 
import { counterComment } from './counter-comment.js';
import { showCountdown } from '../countdown.js'; 
import { showRightMenu } from '../aside-right.js';
/****--------------Все сплывающие меню---------------****/
showPopUpMenuMobile()

/****--------------Обратный отчет. Таймер---------------****/
showCountdown()
/****-------------- Дот меню ---------------****/
const $dotMenu = document.querySelectorAll('.dot-menu');
$dotMenu.forEach(e => e.addEventListener('click', dotMenu));


/****--------------Скролл окна ---------------****/
const $header = document.querySelector('.header')
window.addEventListener('scroll', ev => {
    scrollY > 0 && $header.classList.add('header-fixed')
    scrollY === 0 && $header.classList.remove('header-fixed')
})

/****--------------Правая панел: фильтр, топ учатников d_n---------------****/
const $asideHeaderDrop = document.querySelectorAll('.aside-header-drop');
$asideHeaderDrop.forEach(e => {
    e.addEventListener('click', showRightMenu);
});



/****-------------- Счетчик букв и валидация окончания ---------------****/
const $commentsTextarea = document.querySelector('.section-comments-textarea');

$commentsTextarea.addEventListener('input', counterComment)

/****-------------- Временные ---------------****/
const $addLike = document.querySelectorAll('.add-like');

$addLike.forEach(e => {
    e.addEventListener('click', addLike)
})

let arrAddLike = []

for (let i = 0; i < $addLike.length; i++) {
    arrAddLike[i] = [1]
}

//Временная 
//Меняет цвет лайка
let num = 0
function addLike() {
    num++
    if (num % 1 === 0) {
        this.children[0].src = 'static/img/png/ico/like-up.png'
        this.children[1].style.color = `var(--blue)`
    }
    if (num % 2 === 0) {
        this.children[0].src = 'static/img/png/ico/like.png'
        this.children[1].style.color = `black`
    }


}

//Временная 
//Закрывает чек
document.querySelectorAll('.withdraw-money').forEach(e =>{
    e.addEventListener('click', function(){
        const el = this.parentElement.parentElement.parentElement.parentElement;
        el.classList.add('d_n')
    })
    })













