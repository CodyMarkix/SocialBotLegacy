module.exports = {
  name: 'poll',
  description: 'Příkaz na poll!',
  async execute(client, cmd, message, args, Discord){
    let pollChannel = message.mentions.channel.first;
    let pollDescription = args[1];
    let answer1 = args[2];
    let answer2 = args[3];
    let answer3 = args[4];
    let answer4 = args[5];
    let answer5 = args[6];
    let answer6 = args[7];
    let answer7 = args[8];
    let answer8 = args[9];
    let answer9 = args[10];
    let answer10 = args[11];
    
    let pollEmbed = new Discord.MessageEmbed()
    .addFields(
      {name: '\:regional_indicator_a\:', value: `answer1`}
    )


    pollChannel.send(pollDescription);
    let msgEmbed = await pollChannel.send(pollEmbed);
  }
}