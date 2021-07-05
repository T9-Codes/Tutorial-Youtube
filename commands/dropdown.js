const { MessageMenuOption, MessageMenu } = require("discord-buttons")

module.exports = {
	name: "dropdown", 
	run: async (client, message, args) => {

//MessageMenuOption lo usiamo per le varie opzioni e MessageMenu per raggruppare tutte le opzioni

let ruolo1 = new MessageMenuOption()
.setLabel("Ruolo1")
.setValue("ruoloUNO") //id dell'opzione se sceglie questo verrà eseguita l'opzione data (se creato un event)
.setDescription("Ottieni il ruolo numero 1") //Facoltativo
.setEmoji("859087046201835540") //inseriamo l'emoji dell'opzione (O predefinita o personalizzata la seconda si mette solo id)

let ruolo2 = new MessageMenuOption()
.setLabel("Ruolo2")
.setValue("ruoloDUE")
.setDescription("Ottieni il ruolo numero 2")
.setEmoji("859909386025697331")

let alldropdown = new MessageMenu()
.setID("alldropdown")
.addOption(ruolo1) //aggiunge l'opzione nel dropdown
.addOption(ruolo2)
.setMaxValues(2)
.setMinValues(1) //Anch'esso Facoltativo
.setPlaceholder("Scegli il ruolo più adatto a te!") //Massimo 50 caratteri

message.channel.send("Questo è un dropdown", alldropdown)

client.on("clickMenu", async (menu) => {
	menu.reply.defer()
	if(menu.values[0] === "ruoloUNO") {
		menu.channel.send("Bel numero, bravo!")
	}
})
}
}
