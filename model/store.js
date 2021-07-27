const mongoose = require('mongoose');

const geocoder = require('../utils/geocoder')


const storeSchema = new mongoose.Schema({
    storeId:{
        type:String,
        required:[true,'please add store ID'],
        unique: true,
        trim:true,
        maxLength: [10, 'store Id must be less than 10 chars']
    },
    address:{
        type:String,
        required:[true, 'please add an address'],
    },
    location:{
        type:{
            type:String,
            enum:['Point'],
            // required:true,
           },
        coordinates:{
            type:[Number],
            // required:true,
            index:'2dsphere'
            },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

// geocode & create location
storeSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    // don't save address to database
    // this.address = undefined;
    console.log(loc);
    next();
}) 

module.exports = mongoose.model('Store', storeSchema);

