
// Imports
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3005;



// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/styles'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/assets'))

app.use(express.static('server'))
app.use('/json', express.static(__dirname + 'server/data.json'))
app.use('/json', express.static(__dirname + 'server/exchange-data.json'))
app.use('/json', express.static(__dirname + 'server/news-data.json'))
app.use('/json', express.static(__dirname + 'server/tweets.json'))


// Retrieve JSON files
app.locals.prices = require('./server/data.json');
app.locals.news = require('./server/news-data.json');
app.locals.tweets = require('./server/tweets.json');


app.locals.exchanges = require('./server/exchange-data.json');


// Set Template Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', 'public/views')


// Views
  app.get('/', (req, res) => {
  res.render('index')
  })
  

  app.get('/index', (req, res) => {
  res.render('index')
  })
  
   app.get('/exchanges', (req, res) => {
    res.render('exchanges')
   })

   app.get('/about', (req, res) => {
    res.render('about')
   })



// Listen on port 3000
 app.listen(port, () => {
      console.log(`Listening to app on http://localhost:${port}`);
    });
    
    


