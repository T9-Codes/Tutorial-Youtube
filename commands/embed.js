const discord = require("discord.js")

module.exports = {
  name: "embed",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed() 
    .setColor("GREEN")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTitle("Subscribe Youtube")
    .setDescription("[[Link channel]](https://www.youtube.com/channel/UC4c2D6nKSDKnj1PDxe8Z_zw/)")

    message.channel.send(embed)
  }
}