

const puppeteer = require('puppeteer');


async function scrapeAddress2(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

   
    await page.waitForXPath('//*[@id="post-8868"]/div/div/div[2]/h3/a');
    const [el]= await page.$x('//*[@id="post-8868"]/div/div/div[2]/h3/a');
    const txt = await el.getProperty('textContent');
    const newsTitle = await txt.jsonValue();
   

    await page.waitForXPath('//*[@id="post-8868"]/div/div/div[2]/div[2]');
    const [el2]= await page.$x('//*[@id="post-8868"]/div/div/div[2]/div[2]');
    const txt2 = await el.getProperty('textContent');
    const newsExcerpt = await txt2.jsonValue();
   

    const [el3]= await page.$x('//*[@id="post-8868"]/div/div/div[1]/img');
    const src = await el3.getProperty('src');
    const  newsImg = await src.jsonValue();


    await page.waitForXPath('//*[@id="post-8868"]/div/div/div[2]/ul/li[2]/span/a');
    const [el4]= await page.$x('//*[@id="post-8868"]/div/div/div[2]/ul/li[2]/span/a');
    const txt3 = await el4.getProperty('textContent');
    const  newsSrc = await txt3.jsonValue();




  


    // await page.waitForXPath('/html/body/main/div/div[2]/section/div[2]/div/div/div[1]/div/span[2]');
    // const [el4]= await page.$x('/html/body/main/div/div[2]/section/div[2]/div/div/div[1]/div/span[2]');
    // const txt3 = await el4.getProperty('textContent');
    // const  newsTime = await txt3.jsonValue();

    



    

    // await page.waitForXPath('/html/body/main/div/div[2]/section/div[4]/div/a');
    // const [el3]= await page.$x('/html/body/main/div/div[2]/section/div[4]/div/a');
    // const txt2 = await el3.getProperty('textContent');
    // const CryptoTitle2 = await txt.jsonValue();
   



    browser.close();
    

    const fs = require('fs');

    let cryptoNews = {

        newsTitle,
        newsExcerpt,
        newsImg,
        newsSrc,
        // newsTime

    };


    const news = JSON.stringify(cryptoNews, null, 4);
    
    fs.writeFileSync('server/news-data.json', news);

    console.log({ newsTitle, newsExcerpt,  newsImg, newsSrc });


    return { newsTitle, newsExcerpt, newsImg, newsSrc }

}



module.exports = { 

    scrapeAddress2
}

scrapeAddress2('https://cryptotoday.io/category/cryptocurrency-news/',);


// https://cryptonews.net/


