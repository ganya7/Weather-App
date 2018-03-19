const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');
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
// console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        //console.log(JSON.stringify(results, undefined/*filtering parameters of properties generally not used*/, 2 /*space length*/));
        console.log(results.address);
        weather.getWeather(results.latitude = 37.8267, results.longitude = -122.4233, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
    }
});
//lat, lng, callback
