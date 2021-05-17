
const puppeteer = require('puppeteer');
const mongo = require('./mongo');
const express = require('express')
const app = express();
const fs = require('fs');

var Twit = require('twit');

var config = require('./config');

console.log('Bot is Live')

var T = new Twit(config);



// //POST TWEETS

// var tweet = {

//   status: 'Whats everyones Favourite #cryptocurrency today?'
// }


// //  tweet 'hello world!'
// //
// T.post('statuses/update', tweet , tweeted);

// function tweeted(err, data, response) {

//   if(err) {
//       console.log("something went wrong");
//   }else {
//   console.log("It worked!");
//  }  
// }




// //  search twitter for all tweets containing the word 'banana' since July 11, 2011







// Collect tweets


T.get('search/tweets', { q: 'Crypto News', count: 2 }, function(err, data, response) {

  var tweets = data.statuses;

  for (var i = 0; i < tweets.length; i ++)  {


    const tweetBot = JSON.stringify(tweets[i], null, 2);
    
    fs.writeFileSync('server/tweets.json', tweetBot);
    

    console.log(tweets[i].text);

    return (tweets[i].text) 

  }
});



