module.exports = {
  name: "ascii",
  run: async (client, message, args) => {
    const ascii = require("figlet");
    if (!args.join(" "))
      return message.reply("Specifica un testo per l'ascii art!.");

    ascii(args.join(" "), function(err, data) {
      message.channel.send(`\`\`\`${data}\`\`\``)
    });
  }
};