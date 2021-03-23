
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000
var db = mongoose.connection

app.use(bodyParser.urlencoded({extended: true}));

//mongoose.connect("mongodb+srv://Admin:8kuQCvTCTbppSUrQ@cluster0.v71fr.mongodb.net/mainDB", { useNewUrlParser: true}, {useUniifiedTopology: true}) 
mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, {useUniifiedTopology: true}) 

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



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../user/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
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
 
  newData.save();
  res.redirect('/');
})




app.listen(port, () => {
    console.log('app listening at http://localhost:3000')
  })

  




