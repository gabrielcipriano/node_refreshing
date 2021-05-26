import fetch from 'node-fetch';
import * as fs from 'fs';

// Getting apikey from secret.json with shape { "weatherApikey": "XXXXX", "geoApikey": "XXXXXX" }
const secretJSON = fs.readFileSync('secret.json').toString();
const {weatherApikey, geoApikey} = JSON.parse(secretJSON);



var query = 'Vitoria, ES';
console.log(geoApikey);


var url = `http://api.weatherstack.com/current?access_key=${weatherApikey}&query=${query}`;


var response = fetch(url)
    .then(res => res.json())
    .then(json => json.current)
    .then(c => console.log(`It's currently ${c.temperature} degrees out. There is a ${c.precip}% chance of rain.`));

// // var geo