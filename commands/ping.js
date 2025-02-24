const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;

  let prefix = config.prefix;

  if(!message.content.startsWith(prefix)) return;

  const m = await message.channel.send("Hold on......")

  let pong = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor("DARK BLUE")
  .setTimestamp()
  .addFields(
    {name: 'Message Response Time', value: `${m.createdTimestamp - message.createdTimestamp}ms`, inline: true},
    {name: 'Client Ping', value: `${Math.round(client.ws.ping)}ms`}
  )
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

  m.edit(pong)
}

module.exports.help = {
  name: "ping"
}
