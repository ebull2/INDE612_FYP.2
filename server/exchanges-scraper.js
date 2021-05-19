



const puppeteer = require('puppeteer');


async function scrapeAddress3(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

   
    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[2]/a/div/div/p');
    const [el]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[2]/a/div/div/p');
    const txt = await el.getProperty('textContent');
    const exchange1 = await txt.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[2]/a/div/div/p');
    const [el2]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[2]/a/div/div/p');
    const txt2 = await el2.getProperty('textContent');
    const exchange2 = await txt2.jsonValue();


    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[2]/a/div/div/p');
    const [el3]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[2]/a/div/div/p');
    const txt3 = await el3.getProperty('textContent');
    const exchange3 = await txt3.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[2]/a/div/div/p');
    const [el4]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[2]/a/div/div/p');
    const txt4 = await el4.getProperty('textContent');
    const exchange4 = await txt4.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[2]/a/div/div/p');
    const [el5]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[2]/a/div/div/p');
    const txt5 = await el5.getProperty('textContent');
    const exchange5 = await txt5.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[2]/a/div/div/p');
    const [el6]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[2]/a/div/div/p');
    const txt6 = await el6.getProperty('textContent');
    const exchange6 = await txt6.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[2]/a/div/div/p');
    const [el7]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[2]/a/div/div/p');
    const txt7 = await el7.getProperty('textContent');
    const exchange7 = await txt7.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[2]/a/div/div/p');
    const [el8]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[2]/a/div/div/p');
    const txt8 = await el8.getProperty('textContent');
    const exchange8 = await txt8.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[2]/a/div/div/p');
    const [el9]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[2]/a/div/div/p');
    const txt9 = await el9.getProperty('textContent');
    const exchange9 = await txt9.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[2]/a/div/div/p');
    const [el10]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[2]/a/div/div/p');
    const txt10 = await el10.getProperty('textContent');
    const exchange10 = await txt10.jsonValue();


    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[3]/div/div');
    const [el11]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[3]/div/div');
    const txt11 = await el11.getProperty('textContent');
    const rating1 = await txt11.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[3]/div/div');
    const [el12]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[3]/div/div');
    const txt12 = await el12.getProperty('textContent');
    const rating2 = await txt12.jsonValue();


    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[3]/div/div');
    const [el13]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[3]/div/div');
    const txt13 = await el13.getProperty('textContent');
    const rating3 = await txt13.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[3]/div/div');
    const [el14]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[3]/div/div');
    const txt14 = await el14.getProperty('textContent');
    const rating4 = await txt14.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[3]/div/div');
    const [el15]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[3]/div/div');
    const txt15 = await el15.getProperty('textContent');
    const rating5 = await txt15.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[3]/div/div');
    const [el16]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[3]/div/div');
    const txt16 = await el16.getProperty('textContent');
    const rating6 = await txt16.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[3]/div/div');
    const [el17]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[3]/div/div');
    const txt17 = await el17.getProperty('textContent');
    const rating7 = await txt17.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[3]/div/div');
    const [el18]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[3]/div/div');
    const txt18 = await el18.getProperty('textContent');
    const rating8 = await txt18.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[3]/div/div');
    const [el19]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[3]/div/div');
    const txt19 = await el19.getProperty('textContent');
    const rating9 = await txt19.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[3]/div/div');
    const [el20]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[3]/div/div');
    const txt20 = await el20.getProperty('textContent');
    const rating10= await txt20.jsonValue();
    

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[4]/text()');
    const [el22]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[4]/text()');
    const txt22 = await el22.getProperty('textContent');
    const Volume1 = await txt22.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[4]/text()');
    const [el23]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[2]/td[4]/text()');
    const txt23 = await el23.getProperty('textContent');
    const Volume2 = await txt23.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[4]/text()');
    const [el24]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[3]/td[4]/text()');
    const txt24 = await el24.getProperty('textContent');
    const Volume3 = await txt24.jsonValue();


    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[4]/text()');
    const [el25]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[4]/td[4]/text()');
    const txt25 = await el25.getProperty('textContent');
    const Volume4 = await txt25.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[4]/text()');
    const [el26]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[5]/td[4]/text()');
    const txt26 = await el26.getProperty('textContent');
    const Volume5 = await txt26.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[4]/text()');
    const [el27]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[6]/td[4]/text()');
    const txt27 = await el27.getProperty('textContent');
    const Volume6 = await txt27.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[4]/text()');
    const [el28]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[7]/td[4]/text()');
    const txt28 = await el28.getProperty('textContent');
    const Volume7 = await txt28.jsonValue();
    
    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[4]/text()');
    const [el29]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[8]/td[4]/text()');
    const txt29 = await el29.getProperty('textContent');
    const Volume8 = await txt29.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[4]/text()');
    const [el30]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[9]/td[4]/text()');
    const txt30 = await el30.getProperty('textContent');
    const Volume9 = await txt30.jsonValue();

    await page.waitForXPath('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[4]/text()');
    const [el31]= await page.$x('//*[@id="__next"]/div/div[1]/div[2]/div/div/div[2]/table/tbody/tr[10]/td[4]/text()');
    const txt31 = await el31.getProperty('textContent');
    const Volume10 = await txt31.jsonValue();





    browser.close();
    
    const www = 'www.'

    const fs = require('fs');

    let cryptoExchanges = {

        exchange1,
        exchange2,
        exchange3,
        exchange4,
        exchange5,
        exchange6,
        exchange7,
        exchange8,
        exchange9,
        exchange10,
        rating1,
        rating2,
        rating3,
        rating4,
        rating5,
        rating6,
        rating7,
        rating8,
        rating9,
        rating10,
        Volume1,
        Volume2,
        Volume3,
        Volume4,
        Volume5,
        Volume6,
        Volume7,
        Volume8,
        Volume9,
        Volume10


    };


    const exchanges = JSON.stringify(cryptoExchanges, null, 4);
    
    fs.writeFileSync('server/exchange-data.json', exchanges);

    console.log({ exchange1, exchange2, exchange3, exchange4, exchange5, exchange6, exchange7, exchange8, exchange9, exchange10, rating1, rating2, rating3, rating4, rating5,

        rating6, rating7, rating8, rating9, rating10, Volume1, Volume2, Volume3, Volume4, Volume5, Volume6, Volume6, Volume7, Volume8,Volume9, Volume10  });


    return { exchange1, exchange2, exchange3, exchange4, exchange5, exchange6, exchange7, exchange8, exchange9, exchange10, rating1, rating2, rating3, rating4, rating5,

        rating6, rating7, rating8, rating9, rating10, Volume1, Volume2, Volume3, Volume4, Volume5, Volume6, Volume6, Volume7, Volume8,Volume9, Volume10 }

}




module.exports = { 

    scrapeAddress3
}

scrapeAddress3('https://coinmarketcap.com/rankings/exchanges/',);




