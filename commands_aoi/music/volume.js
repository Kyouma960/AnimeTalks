module.exports = ({
 name: "volume",
 aliases: ["v"],
 $if: 'v4',
 code: `

 $channelSendMessage[$channelID;{newEmbed: {description:**Volume is changed from \`$get[oldvolume]\` to \`$lavalinkExecute[volume]\`**}{color:03CEA4}{footer:Requested by $userTag[$authorID]}{timestamp}}]

 $if[$checkContains[$replaceText[$message;%; ];+]==true]
 $lavalinkExecute[volume;$get[newvolume]] 
 $let[newvolume;$replaceText[$replaceText[$checkCondition[$get[newvolume]>200];true;200];false;$get[newvolume]]
 $let[newvolume;$sum[$get[oldvolume];$replaceText[$get[message];+;]]]
 $endif
 $if[$checkContains[$replaceText[$message;%; ];-]==true]
 $lavalinkExecute[volume;$get[newvolume]]
 $let[newvolume;$replaceText[$replaceText[$checkContains[$get[newvolume];-];true;0];false;$get[newvolume]]
 $let[newvolume;$sub[$get[oldvolume];$replaceText[$get[message];-;]]]
 $endif
 $if[$checkContains[$replaceText[$message;%; ];+;-]==false] 
 $lavalinkExecute[volume;$get[newvolume]]
 $let[newvolume;$get[message]]
 $endif


 $let[oldvolume;$lavalinkExecute[volume]]
 $onlyIf[$isNumber[$get[message]]==true;{newEmbed: {description:**🚫 \`$message\` is not a number!**}{color:RED}}]
 $onlyIf[$message!=;{newEmbed: {description:**🚫 Volume field cannot be empty!**}{color:RED}}]
 $let[message;$replaceText[$message;%; ]]`
})