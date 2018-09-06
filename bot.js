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


const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true})
const Music = require('discord.js-musicbot-addon');
client.login(`BOT_TOKEN `)
client.on('ready', ()=> {
    console.log('Ready!')
})
 Music.start(client, {
    prefix: ".", // البرفكس هنا
    youtubeKey: 'AIzaSyDIv8O9OwZdoTaghK3_SQmyGcQFzkXMW6E', //هنا ال yt v3 api key
    global: false, // يكون للسيرفرات ؟ خليه false, يكون queue مشترك خليه true            
    maxQueueSize: 50, // اقصى حجم لل queue        
    playCmd: 'play', // امر التشغيل
    volumeCmd: 'vol',     // امر الصوت
    thumbnailType: 'high',
    leaveCmd: 'stop',    // امر المغادرة
    anyoneCanSkip: true, // تبي الكل يقدر يسوي skip? true > yep, false > nope
    disableLoop: false, // تبي يكون فيه اعادة؟ , true > yep, false > nope
    searchCmd: 'search', //امر البحث 
    requesterName: true, 
    inlineEmbeds: false,     
    queueCmd: 'queue', // امر القائمة
    pauseCmd: 'pause', // امر الايقاف المؤقت
    resumeCmd: 'resume', // امر الاستمرار
    skipCmd: 'skip', // امر السكب
    loopCmd: 'loop', // امر الاعادة
    enableQueueStat: true,
  });


client.login(process.env.BOT_TOKEN);
