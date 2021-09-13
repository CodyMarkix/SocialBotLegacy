const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Unmute command",
    execute(client, message, args){
        const target = message.mentions.users.first();
        
        if(message.member.permissions.has("MUTE_MEMBERS")){
        if(target){
          let mainRole = message.guild.roles.cache.find(role => role.name === 'Server Members');
          let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

          let memberTarget = message.guild.members.cache.get(target.id);

          if(!args[1]){
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> byl muted`);
            return
          }
          memberTarget.roles.remove(mainRole.id);
          memberTarget.roles.add(muteRole.id);
          message.channel.send(`<@${memberTarget.user.id}> byl muted na ${ms(ms(args[1]))}`);

          setTimeout(function (){
           memberTarget.roles.remove(muteRole.id);
           memberTarget.roles.add(mainRole.id);
          }, ms(args[1]));
        }else{
          message.channel.send('Nemůžu najít toho membera, kterého chceš mutenout.');
        }
    
        } else {
          message.channel.send('Nemáš správná oprávnění!')
        }
    }
}