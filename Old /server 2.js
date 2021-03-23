
const express = require('express');
const mongoose = require('mongoose');
const { paperFormats } = require('puppeteer');

const app = express();

//CONNECT TO DB
mongoose.connect('mongodb+srv://Admin:qs5bPdYYmm0fE3rF@cluster0.v71fr.mongodb.net/mainDB',
{useNewUrlParser: true }, { useUnifiedTopology: true }, () => 
console.log('connected to DB!')

);

//IMPORT ROUTES
const cryptoRoute = require('./scrapers');


//MIDDLEWARE


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/crypto', (req, res) => {
    res.send('We are on Crypto ');
});



app.listen(3000);