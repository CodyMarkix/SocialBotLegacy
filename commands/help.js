module.exports = {
    name: 'help',
    description: "Help příkaz",
    execute(client, message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#ff3f00')
        .setTitle('Social Bot Příkazy')
        .addFields(
          {name: 'General', value: '`about, help, ping`'},
          {name: 'Music \`(Under construction)\`', value: '`play, leave`'},
          {name: 'Admin', value: '`ban, clear, kick, mute, unmute`'},
        )
      
      message.channel.send(helpEmbed);
    }
}