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

















const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server at ${PORT}`);
})