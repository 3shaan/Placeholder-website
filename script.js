function updateCountdown(){
    const now = new Date();
    const targetDate = new Date("2023-12-31 23:59:59");
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff /(1000*60*60*24));
    const hours = Math.floor((timeDiff %(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeDiff %(1000*60*60))/(1000*60));
    const seconds = Math.floor((timeDiff %(1000*60))/1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    const progressPercent = timeDiff / (targetDate - now ) *100;
    const borderColor = `rgb(${Math.min(255, Math.round(progressPercent * 2.55))}, 0, 0)`;

    document.querySelectorAll(".circle").forEach((circle) => {
        circle.style.borderColor = borderColor;
        circle.style.color = borderColor;
    });

}

updateCountdown()

setInterval(updateCountdown,1000)