'use strict'

require('colors');
const request = require('request');
const cheerio = require('cheerio');

// let url = 'https://jadwalsholat.org/adzan/monthly.php?id=285';
let url = 'https://animenonton.net/anime/boruto-naruto-next-generations/';

request(url, function(err, res, body){
    if(err && res.statusCode !== 200) throw err;

    let $ = cheerio.load(body);


    var episode = $('div.bixbox.bxcl').each((i, value) => {
        $(value).find('ul li span.lchx a').each((j, data) => {
            return process.stdout.write('Boruto: Next Generation'+ '\t' + $(data).text() + '\t' + $(data).attr('href') + '\n');
        });
    });
});


