
module.exports = {
	name: "test",
	run: async (client, message, args) => {

		message.channel.send(`TEST: ${client.lang.test}\n${client.lang.name}: T9`)
	}
}
