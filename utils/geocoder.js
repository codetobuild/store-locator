const NodeGeocoder = require('node-geocoder');
 

const option = {
    provider: process.env.GEOCODER_PROVIDER,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null,
};

const geocoder = NodeGeocoder(option);
 

module.exports = geocoder;
 
