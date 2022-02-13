module.exports = {
 name: 'play',
 aliases: ['p'],
 $if: 'v4',
 code: `
$color[1;03CEA4]
$description[1;💿 **$replaceText[$replaceText[$lavalinkExecute[isPlaying];true;Added [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]]) to queue!];false;Playing [$lavalinkExecute[songInfo;title;$get[position]]]($lavalinkExecute[songInfo;url;$get[position]])]**]
$footer[1;Requested by $userTag[$authorID]]
$addTimestamp[1]
$let[position;$sub[$lavalinkExecute[queuetotal];1]]
$let[a;$lavalinkExecute[$replaceText[$replaceText[$lavalinkExecute[isIdling];true;play];false;volume]]]
$log[$lavalinkExecute[isIdling]|$lavalinkExecute[isPlaying]|$lavalinkExecute[isPaused]]
$let[a;$lavalinkExecute[addtrack;$get[key];1]]
$let[key;$lavalinkExecute[search;$message]]
$lavalinkExecute[connect]
$onlyIf[$message!=;{newEmbed: {description:**🚫 I need a song to play!**}{color:RED}}]
$onlyIf[$voiceID!=;{newEmbed: {description:**🚫 You need to be in a voice channel to use this command!**}{color:RED}}]
$suppressErrors`
}