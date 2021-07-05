const discord = require("discord.js")

module.exports = {
name: "invites",
category:"Informazioni",
run: async (client, message, args) => {

let utente;
if(message.mentions.users.first()) {
	utente = message.mentions.users.first()
} else {
	utente = message.author
}

message.guild.fetchInvites().then(invites => {
	
	let invitir = invites.filter(
		i => i.inviter.id === utente.id
	)

	let numinviti = invitir.reduce((p, v) => v.uses + p, 0)

	let embed = new discord.MessageEmbed()
	.setColor("BLUE")
	.setDescription(`${utente.tag} ora hai ben ${numinviti} inviti!`)

	message.channel.send(embed)
})

}}