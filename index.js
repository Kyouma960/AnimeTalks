const Aoijs = require("aoi.js");
const { Client, Intents } = require('discord.js');

const keepAlive = require("./server");
const bot = new Aoijs.Bot({
token: process.env.TOKEN, //Discord Bot Token
prefix:["pro ","Pro ","<@!844815311991603200> ","<@844815311991603200> "], //Discord Bot Prefix
intents: "all" //Discord Intents
})

//const iq = (Math.floor(Math.random() * 100)+40);
global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    partials: [
        'CHANNEL', // Required to receive DMs
    ],
    disableMentions: 'everyone',
});

client.config = require('./values/config');

require('./src/loader');

//VARIABLES
bot.variables ({
host: "",
win: "",
prize: "",
ticketchannel: "",
channel:"",
winnerID:"",
rerollID:""
})




//MUSIC PLAYER SECTION
const Lavalink = new Aoijs.Lavalink(bot);//music bot

Lavalink.addNode({ url: "lavalink.devin-dev.xyz", password: "lava123", name: "YusukeBot", secure: true })

Lavalink.trackStartCommand({
channel: "$channelID",
code: `
$color[1;RANDOM]
$description[1;💿 **Now Playing [$lavalinkExecute[songInfo;title]]($lavalinkExecute[songInfo;url]) in <#$voiceID[$clientID]>**]
 
$image[1;$lavalinkExecute[getthumbnail;$lavalinkExecute[songinfo;identifier];maxresdefault]]`
});
Lavalink.trackEndCommand({
    channel: "$channelID",
    code: `
    $color[1;RANDOM]
    $author[1;Track ended - $lavalinkExecute[songinfo;title]]`
});




//Events
bot.onMessage({
  guildOnly: false //Allows commands to be ran in DMs
})

const loader = new Aoijs.LoadCommands(bot)
loader.load (bot.cmd,"./commands_aoi/")
loader.setColors ({
walking: ["blink", "dim", "fgWhite"],
failedWalking: {
name: ["bright", "fgYellow ", "underline" ],
text: ["bright", "fgRed "]
},
typeError:{
command: ["bright", "fgYellow"],
type: ["fgYellow"],
text: ["bright", "fgRed"]
},
failLoad: {
command:["bright", "fgMagenta"],
type: ["fgRed"],
},
loaded: {
command:["bright", "fgCyan"],
type: ["bright","fgBlue"],
text: ["bright","fgGreen"]
},
})
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

keepAlive();
client.login(client.config.app.token);