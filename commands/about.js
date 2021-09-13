module.exports = {
    name: 'about',
    description: "Test embed",
    execute(client, message, args, Discord){
        const aboutEmbed = new MessageEmbed()
        .setColor('#7D93C8')
        .setTitle('Social Bot')
        .setDescription('O Social Botovi!')
        .setThumbnail('https://i.imgur.com/Q2UU6fU.png')
        .addFields(
          {name: 'O botovi:', value: 'Tento bot byl vytvořen v Únoru 2021.\n Původně měl být pro Discord server, který měl být k Terraria SMP, ale byl předělaný na to, aby šel na Social Townhall'},
          {name: 'Co dělá tenhle bot?', value: 'Tenhle bot má být universální bot, ve kterém je úplně vše. Moderation, utilities, hudba, zábava, atd.'},
          {name: 'Příkazy', value: 's!help :slight_smile:'}

        )
      message.channel.send(aboutEmbed);
    }
}