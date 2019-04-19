const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
    
});














client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
let args = message.content.split(" ").slice(1);
let x = args.join(" ")
  if(message.content.startsWith(prefix + 'say')) {
      let FireKing1 = new Discord.RichEmbed()
      .setTitle("**اختار كيف تريد الساي**")
     .setDescription(`**
     📬 | اذا تريد البوت يرسلك ساي بي امبد
     📇 | اذا تريد البوت يرسلك ساي بدون امبد
     **`)
      message.channel.send(FireKing1).then(b => {
          b.react('📇')
          .then(() => b.react('📬'))
          .then(() =>b.react('📇'))
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === message.author.id;
let reaction1Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === message.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction2.on("collect", r => {
  message.channel.send('#'+x).then(a => {
      a.delete(5000)
  })
  })
  reaction1.on("collect", r => {
      let FireKing2 = new Discord.RichEmbed()
  .setDescription('#'+x)
  .setFooter(`Alpha Codes For Ever`)
  message.channel.send(FireKing2).then(a => {
  a.delete(5000)
  
  })
  })
      })
  }
});


client.login(process.env.BOT_TOKEN);
