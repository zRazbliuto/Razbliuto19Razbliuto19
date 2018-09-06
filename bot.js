const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` #Music is life ✨. `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
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
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});
  
    Rocket.on('message', message => {//help msg
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
      message.react("☑")            

   


      message.author.sendMessage(`**شكرا لك لاستعمال البوت**

      __**الاوامر الادارية :gear:**__

❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
❖${prefix}** channels ** ==>**لانشاء روم صوتي او كتابي او حافضة**
❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
❖${prefix}** band ** ==>**لحصر شخص من السيرفر**
❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**
      __**الاوامر العامة :coffee:**__
❖${prefix}** avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
❖${prefix}** serveravatar ** ==>**لكي يعطيك رابط صورة السيرفر**
❖${prefix}** server ** ==>**لمعلومات السيرفر**
❖${prefix}** id ** ==>**لمعلومات عنك**
❖${prefix}** ping ** ==>**للتحقق من سرعة الاتصال**
❖${prefix}** bot ** ==>**معلومات عن البوت**
❖${prefix}** invite ** ==>**لاحضار البوت الى سيرفرك**
❖${prefix}** time ** ==>**لرؤية الوقت**
❖${prefix}** color ** ==>**لتغيير لونك**
❖${prefix}** roles ** ==>**لكي ترى كل رتب السيرفر**
❖${prefix}** rooms ** ==>**لكي ترى كل قنوات السيرفر**
❖${prefix}** date ** ==>**لكي ترى التاريخ**
      __**الاوامر الترفيهية :coffee:**__
❖${prefix}** mariam ** ==>**للعب مع مريم**
❖${prefix}** cuttweet ** ==>**لكي يعطيك جمل كت تويت عشوائية**
❖${prefix}** sarahah ** ==>**لكي يعطيك جمل صراحة عشوائية**
❖${prefix}** cat ** ==>**لكي ترى صور قطط عشوائية**
❖${prefix}** roll ** ==>**لاختيار رقم عشوائي**
By :<@280749272498962432> | __**شكرا لكم لاستعمال البوت**__

`);

}
});
  
  

client.login(process.env.BOT_TOKEN);
