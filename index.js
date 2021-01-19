// Hitman 3 countdown
// Dotenv, DiscordJS
require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const clientcommands = require('./commands');

var prefix = '!';

Object.keys(clientcommands).map(key => {
    client.commands.set(clientcommands[key].name, clientcommands[key]);
});

client.on('ready', () => {
    client.user.setActivity('HITMAN™ 3', {
        type: "PLAYING"
    });
    console.log("Logged in as " + client.user.tag);
});

//reading messages
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        // console.log(command);
        client.commands.get(command).execute(message, args, client, Discord);
    } catch (error) {
        console.log(error)
        return;
    };
});




client.login(process.env.Bot_Token).catch(error => (console.log(error)));