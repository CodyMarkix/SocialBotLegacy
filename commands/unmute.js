module.exports = {
    name: 'unmute',
    description: "Mute command",
    execute(client, message, args){
        const target = message.mentions.users.first();
        
        if(message.member.permissions.has("MUTE_MEMBERS")){
        if(target){
          let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
          let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

          let memberTarget = message.guild.members.cache.get(target.id);

          memberTarget.roles.remove(muteRole.id);
          memberTarget.roles.add(mainRole.id);
          message.channel.send(`<@${memberTarget.user.id}> byl unmuted.`)
        }else{
          message.channel.send('Nemůžu najít toho membera, kterého chceš unmutenout.')
        }
      } else{
        message.channel.send('Nemáš správná oprávnění!')
      }
    }
}