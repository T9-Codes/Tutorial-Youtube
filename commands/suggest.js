const Discord = require("discord.js");

module.exports = {
name: "suggest",
run: async (client, message, args) => {

let embed1 = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription("Devi inserire qualcosa per mandare il suggerimento")

let msg = args.slice(0).join(" ")
if(!msg) {
	return message.channel.send(embed1)
}
let canale = await client.channels.cache.get("835135247486156812")

let embed2 = new Discord.MessageEmbed()
.setColor("BLUE")
.addField("Nuovo Suggerimento", msg)

canale.send(embed2)

.then(() => {

	message.channel.send("Il tuo messaggio è stato mandato con successo!")
})
}}