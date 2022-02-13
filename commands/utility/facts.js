const request = require('request');
const roasts = require('/home/runner/animetalks/values/roasts');
const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'fact',
	description: 'fact',
execute(client,message, args){
var limit = 1
var probab=(Math.floor(Math.random() * 6)+1);
var roastnum=(Math.floor(Math.random() * 10)+1);
console.log(probab);
request.get({
  url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
  headers: {
    'X-Api-Key': process.env.api_ninja_key
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else if(probab!==2){
    message.channel.send(JSON.parse(body)[0].fact); 
  }
  else{
   message.channel.send(roasts.roastsentences[roastnum]);
  }
});
}}
