//copiamo il codice che ci sarà in index nel link che vi lascio in descrizione

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Saluta Youtube!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); //Ricevi richieste che ti lasciano online

const Discord = require("discord.js"); //Connessione alla libreria Discord.js
const client = new Discord.Client(); //Creazione di un nuovo client
const config = require("./config.json"); //Incollare il prefisso del bot per le risposte ai comandi
require("discord-buttons")(client) //Installiamo il package che ci servirà per il tutorial
client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix)) return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {}
});
const TicTacToe = require('discord-tictactoe');
const tictactoe = new TicTacToe({ language: 'it' })

client.on('message', message => {
  if (message.content.startsWith('-ttt')) {
    tictactoe.handleMessage(message);
  }

});







const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true })

client.on('message', async message => {
	if (message.author.bot) return
	if (!message.content.startsWith(config.prefix)) return
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const cmd = args.shift()

//comando play
if(cmd === "play") {
try {
	const alol = args.join(" ")
	if(!alol) {
		return message.channel.send("Seleziona una canzone!")
	}
	const canaleVC = message.member.voice.channel;
	if(!canaleVC) {
		return message.channel.send("Devi entrare in un canale vocale prima di usare il comando!")
	}
	distube.play(message, args.join(" ")) 
} catch (err) {
		message.channel.send(`${err}`)
}
}


//comando stop
if (cmd === "stop") {
  try {
     distube.stop(message)
     message.channel.send("La musica è stata stoppata con successo!")
  } catch (err) {
		let embedstop = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle("<a:nopebro:806626671934701579> | Errore!")
		.setDescription("Non c'è nessuna musica in riproduzione!")
    message.channel.send(embedstop)
  }
}


//comando volume
if(cmd === "volume") {
	try {
	const volume = parseInt(args[0])
	if (isNaN(volume)) return message.channel.send(`Inserisci un numero valido!`)
	distube.setVolume(message, args.join(" "))
	message.channel.send(`Volume settato a ${volume}%!`)
	} catch (err) {
	let embedvolume = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle("<a:nopebro:806626671934701579> | Errore!")
	.setDescription("Non c'è nessuna musica in riproduzione!")
    message.channel.send(embedvolume)
	}
}

  if (cmd === 'pause') {
       try {
	distube.pause(message);
		message.channel.send("Musica pausata con successo!")
			 } catch (err) {
		let embedpause = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle("<a:nopebro:806626671934701579> | Errore!")
		.setDescription("Non c'è nessuna musica in riproduzione!")
    message.channel.send(embedpause)
	}
			
}

  if (cmd === 'resume') {
		try{
        distube.resume(message);
					message.channel.send("Musica ripresa con successo!")
				} catch (err) {
		let embedresume = new Discord.MessageEmbed()
		.setColor("RED")
		.setTitle("<a:nopebro:806626671934701579> | Errore!")
		.setDescription("Non c'è nessuna musica in riproduzione!")
    message.channel.send(embedresume)
	}
			
}
})

//events listeners

distube.on('searchResult', (message, result) => {
		let i = 0
let embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Scegli una canzone")
.setDescription(`${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)
message.channel.send(embed)
})

distube.on("initQueue", queue => {

	queue.autoplay = false //disattiva l'autoplay
})
//error message
distube.on('error', (message, e) => {
		console.error(e)
		message.channel.send(`Errore riscontrato: ${e}`)
	})
	distube.on("playSong", (message, queue, song) => {
		message.channel.send("La tua musica è appena iniziata!")
	})

		distube.on("finish", (message, queue, song) => {
message.channel.send("La musica è finita :C")
		})



client.login(process.env.TOKEN); //Accede al token e fa partire il bot