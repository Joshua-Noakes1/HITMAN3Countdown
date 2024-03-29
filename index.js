require('dotenv').config();
const {
    Client,
    Intents
} = require('discord.js'),
    WOKCommands = require('wokcommands'),
    path = require('path'),
    lcl = require('cli-color');

// new intents needed for client
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.on('ready', async (client) => {
    // command handler
    await new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        showWarns: false, // not using mongodb so to stop warnings
        ignoreBots: true
    });

    // set bot status
    client.user.setPresence({
        status: "dnd",
        activities: [{
            name: "HITMAN™ 3"
        }]
    });

    // console log we are in
    console.log(lcl.blue("[Discord - Info]"), "Logged in as", `"${lcl.yellow(`${client.user.tag}`)}"`);
});

// try and login (i dont actually know if this works or not)
try {
    client.login(process.env.TOKEN);
} catch (error) {
    console.log(lcl.red("[Discord - Error]"), "Error while trying to login to Discord:", error);
    process.exit(1);
}