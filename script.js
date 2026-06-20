const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const hourNum = document.querySelector('.hours');
const minNum = document.querySelector('.minutes');
function clock () {
    let time = new Date;
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;
    sec.style.transform = `rotate(${second}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;
    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    // console.dir(second);
    setTimeout(() => { clock() }, 1000);
}
clock()
// while (true) {
//     clock()    
// }

//Рекурсия
// var i = 0;
// function rec() {
//     console.log(i++);
//     if (i < 10) {
//         rec()        
//     }
// }
// rec()

const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
console.log(tabs);
for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // element.onclick = function () { console.log('click'); }
    element.addEventListener('click', function (event) { 
        event.preventDefault()
        console.log(event); 
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');  
            tabs[x].classList.remove('active')
        }
        element.classList.add('active')
        tabs[i].classList.add('active')
    })
    console.log(element);
}



// секундомер

const secondInf = document.querySelector('.tabsLink__span');
const secondWatch = document.querySelector('.stopwatch__seconds');
const minutesWatch = document.querySelector('.stopwatch__minutes');
const hoursWatch = document.querySelector('.stopwatch__hours');
const btnWatch = document.querySelector('.stopwatch__btn');


btnWatch.addEventListener("click", function () {  
    if (btnWatch.innerHTML == "start") {
        btnWatch.innerHTML = "stop"
        secondInf.classList.add("active")
        watch(this, 0)
    } else if(btnWatch.innerHTML == "stop") {
        btnWatch.innerHTML = "clear"
        secondInf.classList.remove("active")
        secondInf.classList.add("active_clear")
    } else {
        btnWatch.innerHTML = "start"
        secondInf.classList.remove("active_clear")
        secondWatch.innerHTML = 0
        minutesWatch.innerHTML = 0
        secondWatch.innerHTML = 0
    }
})


function watch(elem, i) {  
   if (elem.innerHTML == "stop") {
    if (i == 59) {
        i = 0
        secondWatch.innerHTML = i
        if (minutesWatch.innerHTML == 59) {
            minutesWatch.innerHTML = 0
            hoursWatch.innerHTML++
        } else {
            
            minutesWatch.innerHTML++
        }
    } else {
        i++
        secondWatch.innerHTML = i
        
     }
    setTimeout(() => {
        watch(elem, i)
    }, 1000);
   } 
}

