const $popUpBtn = document.querySelectorAll('.pop-up-btn');
const $popUpMenu = document.querySelectorAll('.pop-up-menu');
const $glass = document.querySelector('.glass');

function createArrMenu() {
    const arr = [];
    const a = [];
    for (let i = 0; i < $popUpMenu.length; i++) arr.push($popUpMenu[i]);
    const b = a.concat(arr.slice(0, 2), arr.slice(-1), arr.slice(2, 4));
    return b;
}

export function showPopUpMenuMobile() {

    for (let i = 0; i < $popUpBtn.length; i++) {
        const btn = $popUpBtn[i];
        const menu = createArrMenu()[i]
        btn.addEventListener('click', function () {
            //Скрывает меню. при нажатии на другую кнпку
            for (let j = 0; j < createArrMenu().length; j++) {
                const m = createArrMenu()[j];
                if (i === j) continue;
                m.classList.remove('pop-up-menu-header', 'pop-up-menu-main', 'pop-up-menu-footer');
            }
            //Закрыть Бургер и Фильтер
            function close() {
                hideMenu($popUpBtn[3], '_f');
                hideMenu($popUpBtn[4], '_b');
            }
            //Лупа изменение
           
            
            //Делегирование
            switch (i) {
                case 0://Уведомление
                case 1://Логин
                    menu.classList.toggle('pop-up-menu-header');
                    $glass.classList.remove('glass-active'); //Лупа
                    close();//Закрыть Бургер и Фильтер
                    break;
                case 2://Поиск футер
                    menu.classList.toggle('pop-up-menu-footer');
                    $glass.classList.toggle('glass-active');
                    close();//Закрыть Бургер и Фильтер
                    break;
                case 3://Фильтер футер
                    menu.classList.toggle('pop-up-menu-main');
                    $glass.classList.remove('glass-active'); //Лупа
                    showMenu(this, '_f');//показать Фильтер
                    hideMenu($popUpBtn[4], '_b');//Закрыть Бургер 
                    break;
                case 4://Меню футер
                    menu.classList.toggle('pop-up-menu-main');
                    $glass.classList.remove('glass-active'); //Лупа
                    showMenu(this, '_b');//показать Бургер 
                    hideMenu($popUpBtn[3], '_f');//Закрыть  Фильтер
                    break;
            }
        });
    }
}


function showMenu(el, className) {
    for (let i = 0; i < el.children[0].children.length; i++)
        el.children[0].children[i].classList.toggle(`${className}${i}`);
}
function hideMenu(el, className) {
    for (let i = 0; i < el.children[0].children.length; i++)
        el.children[0].children[i].classList.remove(`${className}${i}`);
}