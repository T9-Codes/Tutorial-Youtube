 module.exports = {
    name: "kick",
    run: async (client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) {
  return message.channel.send("Non hai i permessi di usare questo comando!")
}

const utente = message.mentions.members.first()

if(!utente) {
  return message.channel.send("Non hai menzionato nessun utente!")
}

if(!utente.kickable) {
  return message.channel.send("Non posso kickare questo utente")
}

if(utente.id === message.author.id) {
  return message.channel.send("Non puoi auto kickarti...")
}

utente.kick() //kickerà l'utente solo se tutto andrà per il verso giusto :D 
message.channel.send(`${utente} è stato kickato dal server!`)

  }

}