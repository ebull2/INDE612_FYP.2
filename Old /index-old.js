
const express = require('express')
const path = require('path')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000
var db = mongoose.connection



const app = express()
app.use('/', express.static(path.join(__dirname, '/scrapers.js')))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({
	extended: true
  }));


  // mongoose.connect("mongodb://localhost:27017/crypto", 
  // { useNewUrlParser: true ,
  //   useUniifiedTopology: true
   
  // }); 

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ethan-admin:Andoer-44@@clusterinde612.v71fr.mongodb.net/CryptoPricesDB";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("CryptoPricesDB").collection("data");
  // perform actions on the collection object
  client.close();
});


// const MONGODB_URI = 'mongodb+srv://Ethan-admin:Andoer-44@@clusterinde612.v71fr.mongodb.net/CryptoPricesDB?retryWrites=true&w=majority'

// mongoose.connect( MONGODB_URI , {

//   useNewUrlParser: true ,
//   useUniifiedTopology: true
  
//   }); 


// db.on('error', console.error.bind(console, 'Connection Error:'));

db.on('connected', () =>  {

  console.log('Successfully connected to MongoDB!')
});


 
// db.once('open', function() {
//   console.log("Successfully connected to MongoDB!");
// });


app.route('/*').get(function(req, res) { 
  return res.sendFile(path.join(__dirname, '../public/index.html')
); 
});



const cryptoPricesSchema = {

  bitCoinTitle: String,
  bitCoinPrice: String,
  ethereumCoinTitle: String,
  ethereumCoinPrice: String,
  rippleCoinTitle: String,
  rippleCoinPrice: String,

}

const cryptoData = mongoose.model("/scrapers.js", cryptoPricesSchema )

app.get("/", function (req, res) {

  res.send("App is working")

})

app.post("/", function(req, res) {

  let newData = new cryptoData({
    bitCoinTitle: req.body.Bitcoin,
    bitCoinPrice: req.body.BitcoinPrice,
    ethereumCoinTitle: req.body.Ethereum,
    ethereumCoinPrice: req.body.EthereumPrice,
    rippleCoinTitle: req.body.Ripple,
    rippleCoinPrice: req.body.RipplePrice

  })
 
  console.log(cryptoPricesSchema)

  newData.save();
  res.redirect('/');
})




app.listen(port, () => {
    console.log('App listening at http://localhost:3000')
  })

  

