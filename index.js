const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk5MzM3NjYzNDEyNTY4MjI0.XpS7cg.9TSTl-KxgeSBcv50D0bjD4IQnlY';

bot.on('ready', () =>{
  console.log('LoganBot3.0 is Online!');
})

bot.on('message', msg=>{
  if(msg.content === "?pong"){
    msg.reply('Ping!')
  }
})

bot.login(token);
