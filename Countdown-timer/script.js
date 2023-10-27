const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYear = '1 January 2024';

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecond = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / 86400);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const mins = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);