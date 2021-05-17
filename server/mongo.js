

const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const monogpath = 'mongodb+srv://Ethan-admin:Andoer-44@clusterinde612.v71fr.mongodb.net/CryptoPricesDB'



module.exports = async () => {

  await mongoose.connect(monogpath, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose

}







// app.use(bodyParser.urlencoded({extended: true}));

// db.on('error', console.error.bind(console, 'Connection Error:'));
 
// db.once('open', function() {
//   console.log("Successfully connected to MongoDB!");
// });
