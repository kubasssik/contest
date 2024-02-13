import { showRightMenu } from "../aside-right.js"; 

/****--------------Правая панел: фильтр, топ учатников d_n---------------****/
const $asideHeaderDrop = document.querySelectorAll('.aside-header-drop');
$asideHeaderDrop.forEach(e => {
    e.addEventListener('click', showRightMenu);
});


const $helpName = document.querySelector('#help-name')

$helpName.addEventListener('input', showHelpMenu )
$helpName.addEventListener('blur', hideHelpMenu )

function showHelpMenu() {
    let e = this.nextElementSibling.nextElementSibling
   e.classList.remove('d_n')
   e.textContent = this.value
   !this.value.length && e.classList.add('d_n')
}

function hideHelpMenu() {
    let e = this.nextElementSibling.nextElementSibling
    e.classList.add('d_n')
}