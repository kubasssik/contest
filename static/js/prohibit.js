//запрещаем выделение
document.onselectstart = prohibit;
//запрещаем перетаскивание
document.ondragstart = prohibit;
    function prohibit() { return false; }



