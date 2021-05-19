

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// My mongo path to connect to database
const monogpath = 'mongodb+srv://Ethan-admin:Andoer-44@clusterinde612.v71fr.mongodb.net/CryptoPricesDB'


module.exports = async () => {

  await mongoose.connect(monogpath, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose

}
