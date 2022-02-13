module.exports = {
 name: "greroll",
 code: `

$editMessage[$message[1];Giveaway Ended! {newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:End in:Giveaway has been ended
Host: <@!$getMessageVar[host;$message[1]]>
Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]}};$channelID]
$SendMessage[$if[$get[random]!=;Congrats $get[random] you won **$getMessageVar[prize;$message[1]]**;Not enough participant]]

$let[random;$djsEval[
var c = d.util.getChannel(d,"$channelID")
var m = d.util.getMessage(c, "$message[1]")
var arrayy = m.reactions.cache.find( x => x.emoji.toString() === "🎉").users.cache.map(x => x["id"])
arrayy.splice(arrayy.indexOf("$clientId"),1)
var array = arrayy
var win = ""
let u = $getMessageVar[win;$message[1]]
while (u != 0 && array!==[]) {
let r = Math.floor(Math.random()*array.length); 
win += "<@!"+array[r]+">" + " "
array.splice(array.indexOf(array[r]), 1)

u = u - 1

}
win.split(" ").filter(function(a) {
return a!='<@!undefined>' && a != ''
}).join(", ");yes]]
$onlyIf[$getMessage[$channelID;$message[1]]==Giveaway Ended!;Giveaway with that id not ended yet]
$onlyIf[$message[1]!=;Give valid message id]
$onlyPerms[managemessages;You are not staff]
`
 }
 //