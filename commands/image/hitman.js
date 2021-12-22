// from https://docs.wornoffkeys.com/commands/ping-pong-command-example
const createImage = require('./lib/createImage'),
  path = require('path'),
  {
    unlinkSync
  } = require('fs'),
  lcl = require('cli-color'),
  {
    MessageEmbed
  } = require('discord.js');

module.exports = {
  category: 'Media',
  description: 'Replies with an embed of the time till Year 2', // Required for slash commands

  slash: true, // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: async ({
    interaction
  }) => {
    // delay discord reply so we have time to make image
    await interaction.deferReply();

    // create image
    await createImage();

    // make embed
    const embed = new MessageEmbed()
      .setTitle('Death Awaits in HITMAN™ 3')
      .setURL("https://www.hitman.com/global/")
      .setColor('#000')
      .setImage('attachment://hitman.png');

    try {
      // send embed
      await interaction.editReply({
        embeds: [embed],
        files: [{
          attachment: path.join(__dirname, 'lib', 'images', 'custom', 'img.png'),
          name: 'hitman.png'
        }]
      });
      console.log(lcl.green("[Discord - Success]"), "Successfully sent embed to Discord");
    } catch (error) {
      console.log(lcl.red("[Discord - Error]"), "Error while trying to send embed to Discord:", error);
    }
    // delete image
    await unlinkSync(path.join(__dirname, 'lib', 'images', 'custom', 'img.png'));
  },
}