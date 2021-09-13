module.exports = {
    name: 'rules',
    description: "this is a ping command!",
    execute(message, client, Discord){
        const rule1 = new Discord.MessageEmbed()
          .setColour('#B00B69')
          .setTitle('Hello world')

        message.send(rule1)
      }
}