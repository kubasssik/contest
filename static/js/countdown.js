/****--------------Обратный отчет. Таймер---------------****/


export function showCountdown() {
    const star = '24.11.2023';
    const finish = '15.02.2024';
    
    const date = new Date();
    
    //Текущий день
    const day = date.getDate();
    //Текущий месяц
    const month = date.getMonth();
    //Текущий год
    const year = date.getFullYear();
    //Текущий час
    const hours = date.getHours();
    //Текущия минута
    const minutes = date.getMinutes();
    //Текущая секунда
    const seconds = date.getSeconds();
    
    //Остаток дней от текущей даты - от финал дней отнять текущую дату в мс и делить на 60 с/60 м/24 ч/ 1000мс
    var D = Math.abs((new Date(2024, 3 , 15) - new Date(year, month, day)) / 60 / 60 / 24 / 1000);
    //Остаток часов от текущей даты
    var h = 23 - hours;
    //Остаток минут от текущей даты
    var m = 59 - minutes;
    //Остаток секунд от текущей даты
    var s = 60 - seconds;
    
    
    let reverseTime = setInterval(() => {
        let flag = true;//Если true показывает таймер, если false конкурс окончен
        let ss;
        let mm = m;
        let hh = h;
        let dd = D;
        ///////////////////
        s--;
        ss = s;
        //Если меньше 10 одставить ноль спереди
        if (s < 10) ss = `0${s}`;
        //Если меньше нуля:
        if (s < 0) {
            s = 59;
            ss = s;
            m--;
            mm = m;
        }
        ////////////////
        //Если меньше 10 одставить ноль спереди  
        if (m < 10) mm = `0${m}`;
        //Если меньше нуля:
        if (m < 0) {
            m = 59;
            mm = m;
            h--;
            hh = h;
        }
        //////////////////  
        //Если меньше 10 одставить ноль спереди   
        if (h < 10) hh = `0${h}`;
        //Если меньше нуля:
        if (h < 0) {
            h = 23;
            hh = 59;
            D--;
            dd = D;
        }
        if (D < 0) {
            clearInterval(reverseTime);
            flag = false;
        }
    
        document.querySelectorAll('.time').forEach(e => {
            const board = e.children[1].children
            if (flag) {
               for (let i = 0; i < board.length; i++) {
                const e = board[i].children[0];
                
                switch (i) {
                    case 0:
                          e.textContent = dd
                        break;
                        case 1:
                            e.textContent = hh
                        break;
                        case 2:
                            e.textContent = mm
                        break;
                        case 3:
                            e.textContent = ss
                        break;
                }
               }
            }
            else e.innerHTML = `<h6>Конкурс окончен! Поздравляем победителей!</h6> `;
        })
        
    }, 1000);
    }