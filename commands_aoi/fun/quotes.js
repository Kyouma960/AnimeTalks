module.exports = ({
 name: 'quote',
 aliases: ['quote', 'quotes'],
 category: 'Fun',
 description: 'Read A Great Quote',
 code: `
$color[1;RANDOM]
$title[Quote]
$description["**$jsonRequest[https://www.no-api-key.com/api/v2/quotes;quote]**"]
$footer[Quotes By $jsonRequest[https://www.no-api-key.com/api/v2/quotes;author]]

`
});