const discord = require("discord.js")


module.exports.run = async (client, message, args) => {

if(!["805917198995947612"].includes(message.author.id)) {

  return message.channel.send("Non puoi usare questo comando")
}

let codice = args.slice(0).join(" ")

try {
  let evalll = require("util").inspect(eval(codice))
  if(evalll.length > 1960) {
    evalll = evalll.subtr(0,1950);
  }

} catch (err) {
  let erroreh = new discord.MessageEmbed()
  .setColor("RED")
  .setDescription(err) //individuerà l'errore del comando
  message.channel.send(erroreh)
}








}



module.exports.help = {
  name: "eval"
}