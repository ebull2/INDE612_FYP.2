
const puppeteer = require('puppeteer');

async function scrapeAddress(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

    //*[@id="example"]/tbody/tr[1]/td[3]/span[2]
   
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

    await page.waitForXPath('//*[@id="market-table"]/tbody/tr[7]/td[5]/a');
    const [el6]= await page.$x('//*[@id="market-table"]/tbody/tr[7]/td[5]/a');
    const txt6 = await el6.getProperty('textContent');
    const XRPvolume = await txt6.jsonValue();


    //*[@id="market-table"]/tbody/tr[7]/td[5]/a

    //having problems with finding websites that have correct Xpath to use.



    browser.close();

    const fs = require('fs');

    let cryptoPrices = {


        BTCprice,
        ETHprice, 
        XRPprice,
        BTCvolume,
        ETHvolume,
        XRPvolume 
        
    };



    const data = JSON.stringify(cryptoPrices, null, 4 );
    
    fs.writeFileSync('server/data.json', data,);

    console.log({BTCprice, ETHprice, XRPprice, BTCvolume, ETHvolume, XRPvolume });


    return {BTCprice, ETHprice, XRPprice, BTCvolume, ETHvolume, XRPvolume }

}


module.exports = { 

    scrapeAddress
}

scrapeAddress('https://www.cryptocurrencymarket.uk/',);


// https://prices.org/

