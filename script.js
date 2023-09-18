let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds')


let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.getElementById('day_dot');
let hr_dot = document.getElementById('hr_dot');
let min_dot = document.getElementById('min_dot');
let sec_dot = document.getElementById('sec_dot');

function updateCountdown() {
    const now = new Date();
    const targetDate = new Date("2023-12-31 23:59:59");
    const timeDifference = targetDate - now;

    const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeDifference % (1000 * 60)) / 1000);


    //out put 
    days.innerHTML= d +"<br><span>Days</span>";
    hours.innerHTML= h +"<br><span>Hours</span>";
    minutes.innerHTML= m +"<br><span>Minutes</span>";
    seconds.innerHTML= s +"<br><span>Seconds</span>";

    //animation strock

    dd.style.strokeDashoffset= 440 -(440 *d) /365;
    hh.style.strokeDashoffset= 440 -(440 *h) /24;
    mm.style.strokeDashoffset= 440 -(440 *m) /60;
    ss.style.strokeDashoffset= 440 -(440 *s) /60;

    //amimate circle dot

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    //360deg / 365days = 0.986
    hr_dot.style.transform = `rotateZ(${h*15}deg)`;
    // 360deg / 24 hrs = 15;

    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    // 360deg / 60 = 6

    // sec_dot.style.transform = `rotateZ(${s * 6})`;
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`

    if(timeDifference < 0){
        clearInterval(x)
    }

}

// updateCountdown()
var x = setInterval(updateCountdown,1000)