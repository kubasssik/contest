let a = 0
document.querySelector('.c').addEventListener('click', function() {
    if(a === 9) {
        a = 0
        document.querySelector('.header').classList.remove(`c8`)
    }
    a++
    this.textContent = a
    document.querySelector('.header').classList.remove(`c${a - 1}`)
    document.querySelector('.header').classList.toggle(`c${a}`)
   

})

