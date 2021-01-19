const Discord = require("discord.js");
module.exports = {
    name: 'death',
    description: 'it really does await',
    execute(message, args) {
        const image = require('./assets/make_image');
        switch (args[0]){
            case 'awaits':
                async function send_embed() {
                    await image.makeImage();
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`Death Awaits in HITMAN™ 3`)
                    .setURL('http://bit.ly/H3_LaunchTimes')
                    .setColor('#000')
                    .setImage('attachment://hitman.png');
                    message.channel.send({
                        embed,
                        files: [{
                            attachment:'commands/image-embed/assets/hitman3.png',
                            name:'hitman.png'
                          }]
                    });
                    //message.channel.send({files: ['./commands/image-embed/assets/hitman3.png']});
                }
                send_embed();
            break;
        }
    }
}