module.exports = {
 name: 'lyrics',
 aliases: ['ly'], 
code: `
$color[1;RANDOM]
$title[1;$httpRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];GET;;title];$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];links.genius;error while fetching links]] $author[1;$httpRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];GET;;author];$authorAvatar] $description[1;$httpRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];GET;;lyrics] $thumbnail[1;$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];thumbnail.genius;error occurred] $sendMessage[searching for the lyrics of $message] $botTyping $onlyIf[$guildID==$guildId;]` }