/****--------------Правая панел: фильтр, топ учатников---------------****/
export function showRightMenu() {
    let e = this.parentElement.children;
    for (let i = 0; i < e.length; i++) {
        if (!i) continue;//Пропускает header
        e[i].classList.toggle('d_n');//Скрывает все select
    }
}