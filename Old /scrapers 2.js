
const puppeteer = require('puppeteer');


// const router = express.Router();
// const post = require('./model/cryptoPost')

// router.get('/', (req, res) => {

//     res.send('We are on crypto data');
    
// });


// router.post('/',(req,res) =>{

// console.log(req.body);

// });


async function scrapeAddress(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

   
    await page.waitForXPath('//*[@id="example"]/tbody/tr[1]/td[3]/span[2]');
    const [el]= await page.$x('//*[@id="example"]/tbody/tr[1]/td[3]/span[2]');
    const txt = await el.getProperty('textContent');
    const BTCprice = await txt.jsonValue();

    await page.waitForXPath('//*[@id="example"]/tbody/tr[2]/td[3]/span[2]');
    const [el2]= await page.$x('//*[@id="example"]/tbody/tr[2]/td[3]/span[2]');
    const txt2 = await el2.getProperty('textContent');
    const  ETHprice = await txt2.jsonValue();

    await page.waitForXPath('//*[@id="example"]/tbody/tr[7]/td[3]/span[2]');
    const [el3]= await page.$x('//*[@id="example"]/tbody/tr[7]/td[3]/span[2]');
    const txt3 = await el3.getProperty('textContent');
    const  XRPprice = await txt3.jsonValue();



    //having problems with finding websites that have correct Xpath to use.



    browser.close();

    const fs = require('fs');

    let cryptoPrices = {

        BTCprice,
        ETHprice, 
        XRPprice
    };



    const data = JSON.stringify(cryptoPrices, null, 3 );
    
    fs.writeFileSync('server/data.json', data);
    
    console.log({BTCprice, ETHprice, XRPprice});


    return {BTCprice, ETHprice, XRPprice}

}


module.exports = { 

    scrapeAddress

}

scrapeAddress('https://prices.org/',);



