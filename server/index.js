
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000
var db = mongoose.connection




app.listen(port, () => {
    console.log('app listening at http://localhost:3000')
  })

  




