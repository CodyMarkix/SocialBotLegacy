module.exports = {
    name: 'ban',
    description: "This command kicks a member!",
    execute(client, message, args){
        const target = message.mentions.users.first();

        if(message.member.permissions.has("BAN_MEMBERS")){
            if(target){
            let memberTarget = message.guild.members.cache.get(target.id);
            let moderator = message.author;
            let reason = args.slice(1).join(' ')
            memberTarget.send(`Byl si zabanovaný moderátorem ${moderator}! Důvod: ${reason}`)
            memberTarget.ban();
            message.channel.send("Člen byl banned.");
            }else{
            message.channel.send(`Nemůžeš bannout tohto člena!`);
      
          }

        } else {
          message.channel.send('Nemáš správné oprávnění')
        }
  } 

}