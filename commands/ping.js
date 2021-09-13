module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute({ message, client, Discord }){
        const pingEmbed = new Discord.MessageEmbed()
        .setColor('#2aea6e')
        .setTitle('Ping bota 🏓')
        .addFields(
	      	{ name: 'Ping', value: `\`${Date.now() - message.createdTimestamp}ms\`` },
      		{ name: 'Discord API ping', value: `\`${Math.round(client.ws.ping)}ms\`` },
      	)

        message.channel.send(pingEmbed)
    }
}


