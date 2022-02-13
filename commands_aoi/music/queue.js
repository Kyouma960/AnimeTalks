module.exports = {

name: "queue",
aliases: ['q'],
code: `$addfield[Current:;#RIGHT#$songinfo[title]#LEFT#($songinfo[url]) ( <@$songinfo[userID]> \`#RIGHT# $usertag[$songinfo[userID]] #LEFT#\` )]
$color[WHITE]
$description[$queue[$replacetext[$replacetext[$checkcondition[$message!=];false;1];true;$replacetext[$replacetext[$checkcondition[$isnumber[$message]==true];true;$replacetext[$replacetext[$checkcondition[$queue[$message;11;{title}]!=];false;1];true;$message]];false;1]];11;{number}. #RIGHT#{title}#LEFT#({url}) \`#RIGHT# {username}#{discriminator} #LEFT#\`]]

$thumbnail[$songinfo[thumbnail]]
$footer[© Uruha Rushia | Loop: $replacetext[$loopstatus;none;❌ Not active] | Queue: $sub[$queuelength;1] | Page $getobjectproperty[page];$authoravatar]
$addobjectproperty[page;$replacetext[$replacetext[$checkcondition[$isnumber[$message[1]]==true];true;$replacetext[$replacetext[$checkcondition[$queue[$message[1];11;{title}]!=];false;1];true;$message[1]]];false;1] / $replacetext[$replacetext[$checkcondition[$replacetext[$replacetext[$checkcondition[$gettextsplitlength==1];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$replacetext[$replacetext[$checkcondition[$splittext[2]==0];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$sum[$truncate[$divide[$sub[$queuelength;1];10]];1]]]==0];true;1];false;$replacetext[$replacetext[$checkcondition[$gettextsplitlength==1];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$replacetext[$replacetext[$checkcondition[$splittext[2]==0];true;$truncate[$divide[$sub[$queuelength;1];10]]];false;$sum[$truncate[$divide[$sub[$queuelength;1];10]];1]]]]]
$title[List Queue #RIGHT# $sub[$queuelength;1] #LEFT#;$songinfo[url]]$textsplit[$divide[$sub[$queuelength;1];10];.]
$onlyif[$queuelength>=1;{description:I can't find any playing in this server}{color:ff2050}{delete:5s}{footer:© Uruha Rushia}]
$onlyif[$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$channelid]==$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$advancedtextsplit[$getservervar[setup];/;1]];{description:This command is requested only in <#$advancedtextsplit[$getservervar[setup];/;1]>}{color:ff2050}{delete:5s}]
$onlyif[$checkcontains[$replacetext[$tolowercase[$channelpermissionsfor[$clientid]]; ;];embedlinks]==true;I dont have permission to **EMBED_LINKS** to do this action{delete:10s}]
$cooldown[5s;Please wait for %time%{delete:5s}]
$createObject[{}]`
}