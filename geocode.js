const request = require("request")

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURI(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
// console.log(JSON.stringify(body,undefined,2));
        if (error) {
            debugger;
            callback('unable to connect to Google servers')     //provides string for error msg
        }
        /* else if(body.status==='ZERO_RESULTS'){
             debugger;
             callback('unable to find address)
             console.log('unable to find address');
         }*/
        else if (body.status === "OK") {
            debugger;
            callback(undefined/*no errormsg will be provided*/, /*results*/{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            debugger;
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
