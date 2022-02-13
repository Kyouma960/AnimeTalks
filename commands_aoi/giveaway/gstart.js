module.exports = {
name: "gstart",
 code: `
$setTimeout[gw;$get[sc]s;{
"cid":"$channelID",
"host":"$authorID",
"win":"$message[2]",
"mid":"$get[id]",
"prize":"$messageSlice[2]",
"winnerID": "<@873946271621206067>"
}]
$setMessageVar[host;$authorID;$get[id]]
$setMessageVar[win;$message[2];$get[id]]
$setMessageVar[prize;$messageSlice[2];$get[id]]
$let[sc;$splitText[1]$textSplit[$math[$get[p]/1000];.]]
$let[id;$sendMessage[Giveaway Start! {reactions:🎉} {newEmbed:{title:$messageSlice[2]} {description:End in: <t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>
Host: <@!$authorID>
Winner: $message[2]}};yes]]

$onlyIf[$messageSlice[2]!=;gifts must be given]
$onlyIf[$isNumber[$message[2]]==true; the winner given must be a number, and more than 0]
$onlyIf[$get[p]!=-1;The time given is invalid, please provide a valid time like \`1s, 1m, 1d.....\` the correct usage is: \`(prefix)gstart (time) (winner) (prize)]
$let[p;$parseTime[$if[$message[1]!=;$message[1];1s10ms]]]
$onlyPerms[managemessages;You are not staff]
`
}