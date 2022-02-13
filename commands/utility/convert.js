

const request = require('request');
const { Client, Intents } = require('discord.js');
module.exports = {
	name: 'convert',
	description: 'currency',
execute(client,message, args){
message.content = message.content.split(" ");

var amount=message.content[2];
console.log(amount);
var have=message.content[3];
console.log(have);
var want=message.content[4];
console.log(want);

request.get({
  url: 'https://api.api-ninjas.com/v1/convertcurrency?want='+ want + '&have=' + have + '&amount=' + amount,
  headers: {
    'X-Api-Key': process.env.api_ninja_key
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else message.channel.send(JSON.parse(body).new_amount +" " +want.toUpperCase());
});
}}
