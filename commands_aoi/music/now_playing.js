module.exports = {
name: "nowplaying",
  aliases: ["np"],
  code:  `
  $thumbnail[1;$lavalinkExecute[getthumbnail;$get[a];hqdefault]]
  $let[a;$lavalinkExecute[songinfo;identifier]]
  $description[1;
Volume is $lavalinkExecute[volume]%
Track Ends in $lavalinkExecute[songinfo;duration_left]
Current position is $lavalinkExecute[songinfo;current_duration]
Track duration is $lavalinkExecute[songinfo;duration]]
  $color[1;RANDOM]
  $author[1;Track playing - $lavalinkExecute[songinfo;title]]
  `
}