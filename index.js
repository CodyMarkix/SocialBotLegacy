/*
----------------------{ Social Bot }----------------------
Original Author: Markix
Current Developrer(s): Markix
Creation Date: 03/30/2021 (DD-MM-YYYY)
License:

Dependencies:

discord.js
express
fs
ms
yt-search
ytdl-core


About:

This bot is supposed to be a universal bot for a Discord server called Social Townhall.
The bot is very much still in development and more features are being added to it.

The bot started when one day, I, Markix had an idea of learning to program in Javascript and use Discord.js.
And then I thought "Where am I gonna use this?" Then I decided that: I have a server so why not make a bot for that server?
/*/

//Discord bot

const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});


const fs = require('fs');
 
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
require('dotenv').config();
const token = process.env.TOKEN;
client.login(token);
