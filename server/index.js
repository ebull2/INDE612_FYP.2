
const express = require('express')
const app = express()
const port = 3000



const bodyParser = require('body-parser');

const scrapers = require('./scrapers');
const db = require('./db')

app.use(bodyParser.json())
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*"); //Disable Security Rule
    res.header("Access-Control-Allow-Headers", "ContentType");
    next();
});


app.get('/allData', async (req, res) => {
    const cryptoPrices = await db.getAllcryptoPrices();
    res.send(cryptoPrices)
})


app.post('/allData', async(req, res) =>{

    console.log(req,body)
    //to do later
    const cryptoPricesData = await scrapers.scrapeAddress(req.body.cryptoPricesURL)
    const cryptoPrices = await db.insertcryptoPrices(cryptoPricesData.price, req.body.cryptoPricesURL)
    res.send(cryptoPrices)

    console.log(req,body)
    //to do later
    const surfNewsData = await scrapers.scrapeAddress2(req.body.surfNewsURL)
    const SurfNews = await db.insertsurfNews(surfNewsData.img, surfNewsData.name, 
    res.send(surfNews))
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })