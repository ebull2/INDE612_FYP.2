
const puppeteer = require('puppeteer');

async function scrapeAddress3(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

   
    await page.waitForXPath('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[2]/h3/a');
    const [el]= await page.$x('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[2]/h3/a');
    const txt = await el.getProperty('textContent');
    const surfHeading = await txt.jsonValue();

    await page.waitForXPath('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[2]/div[2]');
    const [el2]= await page.$x('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[2]/div[2]');
    const txt2 = await el2.getProperty('textContent');
    const  surfP = await txt2.jsonValue();

    await page.waitForXPath('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[1]/a/img');
    const [el3]= await page.$x('//*[@id="td-outer-wrap"]/div[3]/div/div/div[1]/div/div[2]/div[1]/a/img');
    const src = await el3.getProperty('src');
    const  surfImg= await src.jsonValue();





    browser.close();

    const fs = require('fs');

    let surfNews = {

        surfHeading,
        surfP,
        surfImg
       
    };


    const data2 = JSON.stringify(surfNews, null, 3);
    
    fs.writeFileSync('server/surf-news_Data.json', data2);

   

    console.log({surfHeading, surfP, surfImg});


    return {surfHeading, surfP , surfImg}

}


module.exports = { 

    scrapeAddress3
}

    
    scrapeAddress3('https://news.surfoutlook.com/category/surfing/');



