const Discord = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Discord.Client({
  checkNamespam: true,
  checkSelfbot: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

const triggerWords = ['merhaba']; // botu tetikleyecek kelime

client.on('messageCreate', (message) => {
  if (message.author.id === client.user.id) return; 

  const content = message.content.toLowerCase().trim();

  if (triggerWords.includes(content)) {
    message.channel.send('merhaba').catch(console.error); // botun vereceği cevap
  }
});

client.login('token'); 
