//Hello. You've found the source code for my bot. The entire code is written in node.js.

//HTML implementation for uptimerobot
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`SocialBot listening at http://localhost:${port}`));

//Discord bot

const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});


 
const fs = require('fs');
const Database = require("@replit/database")
 
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})


//Join and leave messages
client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('818463670152724490').send(`Ahoj <@${guildMember.user.id}>! Vítej na Social townhall!`)
});

client.on('guildMemberRemove', guildMember =>{
    
    let leaveChannel = guildMember.guild.channels.cache.get('818463670152724490')
    leaveChannel.send(`<@${guildMember.user.id}> nás opustil(a). Farewell 👋`)
})



//Log in the bot 
client.login(process.env.TOKEN);
