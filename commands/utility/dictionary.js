

const request = require('request');

const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'df',
	description: 'dictionary',
execute(client,message, args){
message.content = message.content.split(" ");

var word=message.content[2];
console.log(word);

request.get({
  url: 'https://api.api-ninjas.com/v1/dictionary?word=' + word,
  headers: {
    'X-Api-Key': process.env.api_ninja_key
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else if(JSON.parse(body).definition === "") return;
  else message.channel.send(JSON.parse(body).definition,{ split: true });
});
}}
