const yargs = require('yargs');
const axios = require('axios')
const argv = yargs.options({
    a: {
        demand: true,
        describe: 'Address to fetch weather for',
        alias: 'address',
        string: true
    }
})
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURI(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find that address');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/ac8aa493fa5e51a2603d19324c6438b2/${latitude},${longitude}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.temperature;
    console.log(temperature);
    console.log(apparentTemperature);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('unable to connect to api server');
    }
    else {
        console.log(e.message); //for explicit error thrown
    }
});