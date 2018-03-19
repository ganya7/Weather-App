const request = require('request');

var getWeather = (latitude,longitude,callback) => {
    request({
        url: `https://api.darksky.net/forecast/ac8aa493fa5e51a2603d19324c6438b2/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            // console.log(body.currently.temperature);
            callback(undefined,{
               temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            // console.log('Unable to connect to server')
            callback('Unable to connect to server');
        }
    });

};

module.exports.getWeather = getWeather;
