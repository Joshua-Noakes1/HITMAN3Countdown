async function makeImage() {
        const fs = require('fs');
        var time = require('./make-time');
        const Canvas = require('canvas');
        const {
            registerFont,
            createCanvas
        } = require('canvas');

        console.log('Creating Image');
        // setting date of end of countdown
        const death_arrives = 'January 20 2021 13:00:00 GMT+0000';
        // getting date and time info
        var ttd = time.getTimeRemaining(death_arrives);

        // setting width for 
        const width = 3840
        const height = 1080

        // setting up canvas
        const canvas = createCanvas(width, height)
        const context = canvas.getContext('2d')

        // loading the fontfile
        registerFont('commands/image-embed/assets/hitmanfont.woff', {
            family: 'Hitman'
        })

        // setting the background
        const background = new Canvas.Image();
        background.src = "./commands/image-embed/assets/Background_3840x1080.png"
        context.drawImage(background, 0, 0)

        // setting up how the text should look (i know it should be 47 but thats just too small)
        context.font = 'normal 300pt Hitman'
        context.textAlign = 'center'
        context.textBaseline = 'center'

        // removing everying thing if its below 0
        // days
        if (ttd.days <= 01) {
            var days = ``
        } else {
            var days = ttd.days + ':'
        }

        if (ttd.hours <= 00) {
            var hours = ``
        } else {
            var hours = ttd.hours + ':'
        }

        if (ttd.minutes <= 00) {
            var minutes = ``
        } else {
            var minutes = ttd.minutes + ':'
        }

        if (ttd.seconds <= 00) {
            var seconds = ``
        } else {
            var seconds = ttd.seconds
        }
        if (ttd.happened == 0) {
            var time_till = `${days}${hours}${minutes}${seconds}`;
        } else {
            context.font = 'normal 200pt Hitman'
            var time_till = 'Death Has Arrived';
        }


        context.fillStyle = '#fff'
        context.fillText(time_till, 2500, 700)

        const buffer = canvas.toBuffer('image/png')
        fs.writeFileSync('./commands/image-embed/assets/hitman3.png', buffer)
        console.log('Made and exported image')
}

module.exports = {
    makeImage
}