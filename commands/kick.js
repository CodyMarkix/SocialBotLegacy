module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args){
        const target = message.mentions.users.first();
        
      if(message.member.permissions.has("KICK_MEMBERS")){
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("Člen byl kicknutý.");
        }else{
            message.channel.send(`Nemůžeš kicknout toho člena!`);
        }
      } else {
        message.channel.send('Nemáš dostatečná oprávnění!')
      }
    }

}