
const express = require('express')
const app = express();
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000
var db = mongoose.connection

app.use(bodyParser.urlencoded({extended: true}));

//mongoose.connect("mongodb+srv://Admin:8kuQCvTCTbppSUrQ@cluster0.v71fr.mongodb.net/mainDB", { useNewUrlParser: true}, {useUniifiedTopology: true}) 
// mongoose.connect("mongodb://localhost:27017/crypto", { useNewUrlParser: true}, {useUniifiedTopology: true})


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ethan-admin:Andoer-44@@clusterinde612.v71fr.mongodb.net/CryptoPricesDB";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("CryptoPricesDB").collection("data");
  // perform actions on the collection object
  client.close();
});


db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});

const cryptoPricesSchema = {

  bitCoinTitle: String,
  bitCoinPrice: String,
  ethereumCoinTitle: String,
  ethereumCoinPrice: String,
  rippleCoinTitle: String,
  rippleCoinPrice: String,

}

const cryptoData = mongoose.model("Data", cryptoPricesSchema )

app.get("/", function (req, res) {

  res.send("express is working")

})


fetch('/data.json')
        .then(response => response.json())
        .then(data => {

            console.log(data)
            data.BTCprice
            data.ETHprice
            data.XRPprice
           
            
        }).catch(err => {
        // code to handle request errors
        console.error('Error: ', err);
    });


app.post("/", function(req, res) {

  let newData = new cryptoData({
    bitCoinTitle: req.body.Bitcoin,
    bitCoinPrice: req.body.BTCprice,
    ethereumCoinTitle: req.body.Ethereum,
    ethereumCoinPrice: req.body.ETHprice,
    rippleCoinTitle: req.body.Ripple,
    rippleCoinPrice: req.body.XRPprice

  })
 
  newData.save();
  res.redirect('/');
})




app.listen(port, () => {
    console.log('App listening at http://localhost:3000')
  })

  




