const lcl = require('cli-color'),
    path = require('path'),
    canvasTxt = require('canvas-txt').default,
    deadlineTime = require('./deadlineTime'),
    {
        writeFileSync
    } = require('fs'),
    {
        registerFont,
        createCanvas,
        Image
    } = require('canvas');

async function createImage() {
    console.log(lcl.blue("[Image - Info]"), "Creating image...");

    // define width and height
    const width = 3840;
    const height = 1080;

    // load font 
    registerFont(path.join(__dirname, 'fonts', 'Noto-BReg.ttf'), { // Noto-BReg.ttf is NotoSans-Bold.ttf but git wont commit NotoSans-Bold.ttf
        family: 'HM-Bold',
    });

    // create canvas
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // load background image
    img.src = path.join(__dirname, 'images', 'static', 'Background_3840x1080.png');
    ctx.drawImage(img, 0, 0, width, height);

    // load timeLeft and confgure
    var timeLeft = await deadlineTime('January 20 2022 18:00:00 GMT+0000'); // it did change https://twitter.com/IOInteractive/status/1483883848601636868
    var timeLeftStr = {
        str: "Death Awaits",
        size: "300"
    }

    if (timeLeft.passed == false) {
        // seconds, minutes, hours
        if (timeLeft.seconds != '00') {
            timeLeftStr.str = `${timeLeft.seconds}`;
        } else {
            timeLeftStr.str = `00`;
        }

        if (timeLeft.minutes != '00') {
            timeLeftStr.str = `${timeLeft.minutes}:${timeLeftStr.str}`;
        } else {
            timeLeftStr.str = `00:${timeLeftStr.str}`;
        }

        if (timeLeft.hours != '00') {
            timeLeftStr.str = `${timeLeft.hours}:${timeLeftStr.str}`;
        } else {
            timeLeftStr.str = `00:${timeLeftStr.str}`;
        }

        // days, months, years
        if (timeLeft.days != 0) {
            timeLeftStr.str = `${timeLeft.days}D ${timeLeftStr.str}`;
        }

        if (timeLeft.months != 0) {
            timeLeftStr.str = `${timeLeft.months}M ${timeLeftStr.str}`;
            if (timeLeftStr.size == '300') timeLeftStr.size = '250'; // fix for months
        }

        if (timeLeft.years != 0) {
            timeLeftStr.str = `${timeLeft.years}Y ${timeLeftStr.str}`;
            if (timeLeftStr.size == '300') timeLeftStr.size = '230'; // 230 is needed because
        }
    }

    // configure canvasTxt
    canvasTxt.font = 'HM-Bold';
    canvasTxt.align = 'left';
    canvasTxt.fontSize = timeLeftStr.size;
    ctx.fillStyle = '#fff'; // white
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    // canvasTxt.debug = true; // uncomment to see the border on the canvas

    // write text
    canvasTxt.drawText(ctx, timeLeftStr.str, 1450, 300, 2250, 570);

    // save image
    writeFileSync(path.join(__dirname, 'images', 'custom', 'img.png'), canvas.toBuffer());
    console.log(lcl.blue("[Image - Info]"), "Image created!");
}


module.exports = createImage;
