const Discord = require('discord.js-selfbot-v13'); // npm i discord.js-selfbot-v13
const client = new Discord.Client({
  checkNamespam: true,
  checkSelfbot: true
});

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı.`);
});

const triggerWords = ['sa', 'selam', 'selamın aleyküm', 'slm'];

client.on('messageCreate', (message) => {
  if (message.author.id === client.user.id) return; // Kendi mesajına tepki verme

  const content = message.content.toLowerCase().trim();

  if (triggerWords.includes(content)) {
    message.channel.send('as hoşgeldin kardeşim.').catch(console.error);
  }
});

client.login('tokeniniz'); 
