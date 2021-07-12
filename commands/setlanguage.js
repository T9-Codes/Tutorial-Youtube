const db = require("quick.db") 

module.exports = {
	name: "setlanguage",
	run: async (client, message, args) => {

		if(!args[0]) {
			return message.channel.send("Non hai definito un linguaggio")
		}

		if(args[0] === "it") {
			db.set(`setlang_${message.guild.id}`, "it")
			return message.channel.send("Settato a **ITALIANO**")
		}

		if(args[0] === "en") {
			db.set(`setlang_${message.guild.id}`, "en")
			return message.channel.send("Settato a **INGLESE**")
		}
		
	}
}
