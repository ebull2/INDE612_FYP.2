

const mongoose = require('mongoose');



const cryptoPricesSchema = mongoose.Schema({

    bitCoinPrice: String,
    ethereumCoinPrice: String,
    rippleCoinPrice:  String,
    Date: {
        type: Date, 
        default: Date.now()
    }
})

module.exports = mongoose.model('cryptoData', cryptoPricesSchema)