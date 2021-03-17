
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000
var db = mongoose.connection

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Admin:8kuQCvTCTbppSUrQ@cluster0.v71fr.mongodb.net/mainDB", { useNewUrlParser: true}, {useUniifiedTopology: true}) 

db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});

const cryptoPricesSchema = {

  title: String,
  Price: String

}

const cryptoData = mongoose.model("Data", cryptoPricesSchema )

app.get("/", function (req, res) {

  res.send("express is working")

})

app.post("/", function(req, res) {

  let newData = new cryptoData({
    title: req.body.Bitcoin,
    Price: req.body.BitcoinPrice

  })
 
  newData.save();
  res.redirect('/');
})




app.listen(port, () => {
    console.log('app listening at http://localhost:3000')
  })

  




