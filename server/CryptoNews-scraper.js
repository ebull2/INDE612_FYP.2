

const puppeteer = require('puppeteer');


async function scrapeAddress2(url) {

    const browser = await puppeteer.launch();
    const page  = await browser.newPage();
    await page.goto(url);

   
    await page.waitForXPath('/html/body/main/div/div[2]/section/div[2]/div/a');
    const [el]= await page.$x('/html/body/main/div/div[2]/section/div[2]/div/a');
    const txt = await el.getProperty('textContent');
    const newsTitle = await txt.jsonValue();


   

    // await page.waitForXPath('//*[@id="post-8894"]/div/div/div[2]/div[2]/text()');
    // const [el2]= await page.$x('//*[@id="post-8894"]/div/div/div[2]/div[2]/text()');
    // const txt2 = await el.getProperty('textContent');
    // const newsExcerpt = await txt2.jsonValue();
   
    await page.waitForXPath('/html/body/main/div/div[2]/section/div[2]/a/span');
    const [el3]= await page.$x('/html/body/main/div/div[2]/section/div[2]/a/span');
    const src = await el3.getProperty('src');
    const  newsImg = await src.jsonValue();



    await page.waitForXPath('/html/body/main/div/div[2]/section/div[2]/div/div/div[1]/div/span[1]');
    const [el4]= await page.$x('/html/body/main/div/div[2]/section/div[2]/div/div/div[1]/div/span[1]');
    const txt3 = await el4.getProperty('textContent');
    const  newsSrc = await txt3.jsonValue();


    await page.waitForXPath('/html/body/main/div/div[2]/section/div[3]/div/a');
    const [el5]= await page.$x('/html/body/main/div/div[2]/section/div[3]/div/a');
    const txt4 = await el5.getProperty('textContent');
    const newsTitle2 = await txt4.jsonValue();


    await page.waitForXPath('/html/body/main/div/div[2]/section/div[3]/div/div/div[1]/div/span[1]');
    const [el6]= await page.$x('/html/body/main/div/div[2]/section/div[3]/div/div/div[1]/div/span[1]');
    const txt5 = await el6.getProperty('textContent');
    const newsSrc2 = await txt5.jsonValue();


    await page.waitForXPath('/html/body/main/div/div[2]/section/div[4]/div/a');
    const [el7]= await page.$x('/html/body/main/div/div[2]/section/div[4]/div/a');
    const txt6 = await el7.getProperty('textContent');
    const newsTitle3 = await txt6.jsonValue();

    
    await page.waitForXPath('/html/body/main/div/div[2]/section/div[4]/div/div/div[1]/div/span[1]');
    const [el8]= await page.$x('/html/body/main/div/div[2]/section/div[4]/div/div/div[1]/div/span[1]');
    const txt7 = await el8.getProperty('textContent');
    const newsSrc3 = await txt7.jsonValue();

    await page.waitForXPath('/html/body/main/div/div[2]/section/div[5]/div/a');
    const [el9]= await page.$x('/html/body/main/div/div[2]/section/div[5]/div/a');
    const txt8 = await el9.getProperty('textContent');
    const newsTitle4 = await txt8.jsonValue();

    await page.waitForXPath('/html/body/main/div/div[2]/section/div[5]/div/div/div[1]/div/span[1]');
    const [el10]= await page.$x('/html/body/main/div/div[2]/section/div[5]/div/div/div[1]/div/span[1]');
    const txt9= await el10.getProperty('textContent');
    const newsSrc4 = await txt9.jsonValue();

    
     // HAD PROBLEMS FINDING THE RIGHT WEBSITE TO USE THE XPATH'S



    browser.close();
    
    const www = 'www.'

    const fs = require('fs');

    let cryptoNews = {

        newsTitle,
        newsImg,
        newsSrc,
        newsTitle2,
        newsSrc2,
        newsTitle3,
        newsSrc3,
        newsTitle4,
        newsSrc4


    };


    const news = JSON.stringify(cryptoNews, null, 4);
    
    fs.writeFileSync('server/news-data.json', news);

    console.log({ newsTitle, newsSrc, newsTitle2, newsSrc2, newsSrc3, newsTitle4, newsSrc4 });


    return { newsTitle, newsImg, newsSrc, newsTitle2, newsSrc2, newsTitle3, newsSrc3, newsTitle4, newsSrc4}

}




module.exports = { 

    scrapeAddress2
}

scrapeAddress2('https://cryptonews.net/',);


// https://cryptonews.net/


