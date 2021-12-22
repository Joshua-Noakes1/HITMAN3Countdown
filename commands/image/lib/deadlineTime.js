const lcl = require('cli-color');

function deadlineTime(deadlineDate) {
    console.log(lcl.blue("[Time - Info]"), "Working out time till Year 2...");

    // set date and time
    var timeLeft = {
        date: Date.parse(deadlineDate) - Date.parse(new Date()),
        passed: false,
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    // calculate time left
    if (timeLeft.date < 0) timeLeft.passed = true;
    if (timeLeft.passed == false) {
        // calculate time left (days, hours, etc..)
        timeLeft.years = Math.floor(timeLeft.date / (1000 * 60 * 60 * 24 * 365));
        timeLeft.months = Math.floor((timeLeft.date % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        timeLeft.days = Math.floor((timeLeft.date % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        timeLeft.hours = Math.floor((timeLeft.date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timeLeft.minutes = Math.floor((timeLeft.date % (1000 * 60 * 60)) / (1000 * 60));
        timeLeft.seconds = Math.floor((timeLeft.date % (1000 * 60)) / 1000);

        // format extra zeros to the start for single numbers so theyre not displayed as 09 instead of 9
        if (timeLeft.hours < 10) timeLeft.hours = '0' + timeLeft.hours;
        if (timeLeft.minutes < 10) timeLeft.minutes = '0' + timeLeft.minutes;
        if (timeLeft.seconds < 10) timeLeft.seconds = '0' + timeLeft.seconds;
    }

    // return time left
    console.log(lcl.blue("[Time - Info]"), "Time till Year 2:", timeLeft.years, "years, ", timeLeft.months, "months, ", timeLeft.days, "days, ", timeLeft.hours, "hours, ", timeLeft.minutes, "minutes, ", timeLeft.seconds, "seconds");
    return timeLeft;
}

module.exports = deadlineTime;