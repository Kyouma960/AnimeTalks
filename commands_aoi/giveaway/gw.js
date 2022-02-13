module.exports = {
 name: "gw",
 type: "timeout",
 code: `
$editMessage[$timeoutData[mid];Giveaway Ended! {newEmbed:{title:$timeoutData[prize]} {description:End in:Giveaway has been ended
Host: <@!$timeoutData[host]>
Winner(s):$if[$get[random]==;No winner (no participant);$timeoutData[winnerID]]}};$timeoutData[cid]]
$channelSendMessage[$timeoutData[cid];$if[$get[random]!=;Congrats $timeoutData[winnerID] you won **$timeoutData[prize]**;Not enough participant]]

$let[random;$djsEval[
var c = d.util.getChannel(d,"$timeoutData[cid]")
var m = d.util.getMessage(c, "$timeoutData[mid]")
var arrayy = m.reactions.cache.find( x => x.emoji.toString() === "🎉").users.cache.map(x => x["id"])
arrayy.splice(arrayy.indexOf("$clientId"),1)
var array = arrayy
var win = ""
let u = $timeoutData[win]
while (u != 0 && array!==[]) {
let r = Math.floor(Math.random()*array.length); 
win += "<@!"+array[r]+">" + " "
array.splice(array.indexOf(array[r]), 1)

u = u - 1

}
win.split(" ").filter(function(a) {
return a!='<@!undefined>' && a != ''
}).join(", ");yes]]
$onlyIf[$getMessage[$timeoutData[cid];$timeoutData[mid]]!=Giveaway Ended!;]
`
 
}
//Winner(s):$if[$get[random]==;No winner (no participant);$get[random]]}};$timeoutData[cid]]$channelSendMessage[$timeoutData[cid];$if[$get[random]!=;Congrats $get[random] you won **$timeoutData[prize]**;Not enough participant]]