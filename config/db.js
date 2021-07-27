 
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(`${process.env.DATABASE_URL}`, {useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.set('useCreateIndex', true);

        console.log('mongodb connected', connect.connection.host );
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;