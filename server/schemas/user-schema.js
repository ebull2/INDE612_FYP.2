

const mongoose = require('mongoose');



const cryptoPricesSchema = mongoose.Schema({

    bitCoinPrice: String,
    ethereumCoinPrice: String,
    rippleCoinPrice:  String
})

module.exports = mongoose.model('cryptoData', cryptoPricesSchema)