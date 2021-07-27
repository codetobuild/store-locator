require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db')

// routes
const storeRoute = require('./routes/stores');

 
// setup 
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));



// connect db 
connectDB();
 
 
app.use('/',storeRoute)

app.all('*',(req,res) => {
    res.send('<h1>Opps! This route does not exist.</h1><a href="index.html">Back to home</a>')
})
















const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server at ${PORT}`);
})