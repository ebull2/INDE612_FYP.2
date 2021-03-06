

// Module to do web scraping
const puppeteer = require('puppeteer');
const mongo = require('./mongo');
const express = require('express')
const app = express();
const cryptoPricesSchema = require('./schemas/user-schema');



async function scrapeAddress(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

    // Calling in Xpath to select the data 
   
    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[1]/td[2]/a');
    const [el]= await page.$x('//*[@id="market-table"]/tbody/tr[1]/td[2]/a');
    const txt = await el.getProperty('textContent');
    const BTCprice = await txt.jsonValue();


    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[2]/td[2]/a');
    const [el2]= await page.$x('//*[@id="market-table"]/tbody/tr[2]/td[2]/a');
    const txt2 = await el2.getProperty('textContent');
    const  ETHprice = await txt2.jsonValue();

    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[4]/td[2]/a');
    const [el3]= await page.$x('//*[@id="market-table"]/tbody/tr[4]/td[2]/a');
    const txt3 = await el3.getProperty('textContent');
    const  XRPprice = await txt3.jsonValue();


    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[1]/td[5]/a');
    const [el4]= await page.$x('//*[@id="market-table"]/tbody/tr[1]/td[5]/a');
    const txt4 = await el4.getProperty('textContent');
    const BTCvolume = await txt4.jsonValue();


    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[2]/td[5]/a');
    const [el5]= await page.$x('//*[@id="market-table"]/tbody/tr[2]/td[5]/a');
    const txt5 = await el5.getProperty('textContent');
    const ETHvolume = await txt5.jsonValue();

    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[4]/td[3]');
    const [el6]= await page.$x('//*[@id="market-table"]/tbody/tr[4]/td[3]');
    const txt6 = await el6.getProperty('textContent');
    const XRPvolume = await txt6.jsonValue();




    browser.close();

    const fs = require('fs');

    let cryptoPrices = {


        BTCprice,
        ETHprice, 
        XRPprice,
        BTCvolume,
        ETHvolume,
        XRPvolume, 

        
    };

   

    const connectToMongoDB = async () => {

        await mongo().then (async (mongoose) => {
        
            try {
                console.log('Connected To MongoDB!')

                const cryptoData = {

                    bitCoinPrice: cryptoPrices.BTCprice,
                    ethereumCoinPrice: cryptoPrices.ETHprice,
                    rippleCoinPrice:  cryptoPrices.XRPprice,

                    
                }
        
                await new cryptoPricesSchema(cryptoData).save()
        
            } finally {
                mongoose.connection.close()
            }
        })
        }
        connectToMongoDB()
  



    const data = JSON.stringify(cryptoPrices, null, 4 );

    // Write to JSON file
    
    fs.writeFileSync('server/data.json', data,);
    

    console.log({BTCprice, ETHprice, XRPprice, BTCvolume, ETHvolume, XRPvolume });


    return {BTCprice, ETHprice, XRPprice, BTCvolume, ETHvolume, XRPvolume,  }


        }


module.exports = { 

    scrapeAddress
}


// Website used to scrape

scrapeAddress('https://www.cryptocurrencymarket.uk/',);




 




