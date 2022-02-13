module.exports = {
name: "skip",
aliases: ['s'],
code: `$if[$message==]
$sendmessage[{description:**⏭ | Success skip music**}{color:WHITE}{footer:$username[$authorid]:$authoravatar};no]
$skipsong
$onlyif[$voiceid[$authorid]==$voiceid[$clientid];{description:Im still in voice channel \`$channelname[$voiceid[$clientid]]\`}{color:ff2050}{delete:5s}]
$onlyif[$queuelength>=1;{description:I can't find any playing in this server}{color:ff2050}{delete:5s}]
$onlyif[$voiceid!=;{description:You must in voice channel first}{color:ff2050}{delete:5s}]
$onlyif[$checkcontains[$replacetext[$tolowercase[$channelpermissionsfor[$clientid]]; ;];embedlinks]==false;I dont have permission to **EMBED_LINKS** to do this action{delete:10s}]
$cooldown[5s;Please wait for %time%{delete:5s}]
$elseif[$isnumber[$message[1]]==true]
$description[**⏩ | Success skip \`$message[1]\` music**]
$color[WHITE]
$footer[$username[$authorid];$authoravatar]
$skipto[$message[1]]
$onlyif[$message[1]<=$queuelength;{description:Queue only have \`$queuelength\` music}{color:ff2050}{delete:5s}]
$onlyif[$voiceid[$authorid]==$voiceid[$clientid];{description:Im still in voice channel \`$channelname[$voiceid[$clientid]]\`}{color:ff2050}{delete:5s}]
$onlyif[$queuelength>=1;{description:I can't find any playing in this server}{color:ff2050}{delete:5s}]$onlyif[$voiceid!=;{description:You must in voice channel first}{color:ff2050}{delete:5s}]
$onlyif[$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$channelid]==$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$advancedtextsplit[$getservervar[setup];/;1]];{description:This command is requested only in <#$advancedtextsplit[$getservervar[setup];/;1]>}{color:ff2050}{delete:5s}]
$onlyif[$checkcontains[$replacetext[$tolowercase[$channelpermissionsfor[$clientid]]; ;];embedlinks]==false;I dont have permission to **EMBED_LINKS** to do this action{delete:10s}]
$cooldown[5s;Please wait for %time%{delete:5s}]
$endelseif
$elseif[$message!=]
$sendmessage[{description:**⏭ | Success skip music**}{color:WHITE}{footer:$username[$authorid]:$authoravatar};no]
$skipsong
$onlyif[$voiceid[$authorid]==$voiceid[$clientid];{description:Im still in voice channel \`$channelname[$voiceid[$clientid]]\`}{color:ff2050}{delete:5s}]
$onlyif[$queuelength>=1;{description:I can't find any playing in this server}{color:ff2050}{delete:5s}]$onlyif[$voiceid!=;{description:You must in voice channel first}{color:ff2050}{delete:5s}]
$onlyif[$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$channelid]==$replacetext[$replacetext[$checkcondition[$findchannel[$advancedtextsplit[$getservervar[setup];/;1];no]==undefined];true;true];false;$advancedtextsplit[$getservervar[setup];/;1]];{description:This command is requested only in <#$advancedtextsplit[$getservervar[setup];/;1]>}{color:ff2050}{delete:5s}]
$onlyif[$checkcontains[$replacetext[$tolowercase[$channelpermissionsfor[$clientid]]; ;];embedlinks]==false;I dont have permission to **EMBED_LINKS** to do this action{delete:10s}]
$cooldown[5s;Please wait for %time%{delete:5s}]
$endelseif
$endif`
}