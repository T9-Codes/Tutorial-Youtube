const { MessageButton } = require("discord-buttons")
const { MessageEmbed } = require("discord.js")
module.exports = {
	name: "buttons", 
	run: async (client, message, args) => {
		const bottone1 = new MessageButton()
		.setStyle("red") //colori disponibili: blurple, red, green, grey, url 
		.setLabel("Iscriviti") //Casella di testo
		.setEmoji("🔴") //Metti un'emoji personalizzata (mettendo solo ID) o predefinita 
		.setID("yt") //Setta l'id del bottone

		const embed = new MessageEmbed()
		.setColor("RED")
		.setDescription("Iscriviti al mio canale!")
	
	message.channel.send({
		component: bottone1,
		embed: embed
	})

	client.on("clickButtons", async (button) => {

		if(button.id === "yt") {
			button.defer() //servirà per non far visualizzare il messaggio d'errore
		const embed = new MessageEmbed()
		.setColor("RED")
		.setDescription("Ti sei iscritto con successo!")

			button.message.channel.send(embed)
		}
	})
}
	}