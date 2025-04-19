const Discord = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Discord.Client({
  checkNamespam: true,
  checkSelfbot: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

client.on('messageCreate', (message) => {
  if (message.author.id === client.user.id) return; // Kendi mesajına tepki verme

  if (message.content.toLowerCase() === 'sa') {
    message.channel.send('as hoşgeldin.');
  }
});

client.login('tokeniniz');
