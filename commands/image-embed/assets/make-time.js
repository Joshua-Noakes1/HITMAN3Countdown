function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));

    // make days 09 instead of 9
    if (days <= 9) {
        var days = `0${days}`
    } else {
        var days = days
    }

    // make hours 09 instead of 9
    if (minutes <= 9) {
        var minutes = `0${minutes}`
    } else {
        var minutes = minutes
    }
/*
    // make minutes 09 instead of 9
    if (minutes <= 9) {
        var minutes = `${minutes}`
    } else {
        var minutes = minutes
    }
*/
    // make seconds 09 instead of 9
    if (seconds <= 9) {
        var seconds = `0${seconds}`
    } else {
        var seconds = seconds
    }


    if (total < 0) {
        var happened = 1
    } else {
        var happened = 0
    }

    return {
        happened,
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

module.exports = {getTimeRemaining}