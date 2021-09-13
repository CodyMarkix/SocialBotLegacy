module.exports = {
    name: 'clear',
    description: "Command for clearing messages",
    async execute(client, message, args){
        
        if(message.member.permissions.has("MANAGE_MESSAGES")){

         if(!args[0]) return message.reply("prosím napiš, kolik zpráv chceš smazat!");
          if(isNaN(args[0])) return message.reply("prosím napiš reálné číslo!");
          if(args[0] > 100) return message.reply("nemůžeš smazat víc než 100 zpráv.");
         if(args[0] < 1) return message.reply("musíš smazat alespoň jednu zprávu.");

          await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
          });
       } else {
         message.channel.send('Nemáš dostatečná oprávnění!')
       } 
    }
}