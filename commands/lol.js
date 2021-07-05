const Discord = require("discord.js")
module.exports = {
	run: "lol", 
	run: async (client, message, args) => {

		const embedhome = new Discord.MessageEmbed()
.setColor("YELLOW")
.setTitle("Embed principale")
.setDescription("Iscriviti al mio canale youtube!")


const embed1 = new Discord.MessageEmbed()
.setColor("ORANGE")
.setTitle("Embed Primario")
.setDescription("Iscriviti al mio canale youtube!")

const embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Embed Secondario")
.setDescription("Iscriviti al mio canale youtube!")

const embed3 = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Embed Terziario")
.setDescription("Iscriviti al mio canale youtube!")

message.channel.send(embedhome).then(msg => {
	msg.react("🏠")
	msg.react("⚡")
	msg.react("⭐")
	msg.react("👀")

msg.awaitReactions((reaction, user) => {
		if(message.author.id !== user.id) return;
	reaction.users.remove(user);
if(reaction.emoji.name === "🏠") {
	return msg.edit(embedhome)
}

if(reaction.emoji.name === "⚡") {
	return msg.edit(embed1)
}
if(reaction.emoji.name === "⭐") {
	return msg.edit(embed2)
}
if(reaction.emoji.name === "👀") {
	return msg.edit(embed3)
}
})
})

	}
}