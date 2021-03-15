
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb+srv://root:q2dhQpDjV36TXh9I@cluster0.v71fr.mongodb.net/mainDB", { useNewUrlParser: true }, { useUnifiedTopology: true })


const cryptoPricesSchema = {

    title: String,
    price: String

}

const cryptoData = mongoose.model("cryptoData", cryptoPricesSchema);


  app.get("server/data.json", function(req, res) {

    res.sendFile( __dirname , "./user/index.html",);

})

app.post("/", function(req, res) {


  console.log("price: ", req.body.BTCprice);

  res.send();
  
});





app.listen(3000, function() {
  console.log("App listening at http://localhost:3000")
})





// app.get('/allData', async (req, res) => {
//     const cryptoPrices = await db.getAllcryptoPrices();
//     res.send(cryptoPrices)
// })


// app.post('/allData', async(req, res) =>{

//     console.log(req,body)
//     //to do later
//     const cryptoPricesData = await scrapers.scrapeAddress(req.body.cryptoPricesURL)
//     const cryptoPrices = await db.insertcryptoPrices(cryptoPricesData.price, req.body.cryptoPricesURL)
//     res.send(cryptoPrices)

// })


