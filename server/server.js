

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('../Model/user')
const bcrypt = require('bcryptjs')
const { response } = require('express')
const port = 3005
var db = mongoose.connection


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("UsersDB").collection("users");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect("mongodb+srv://Admin:8kuQCvTCTbppSUrQ@cluster0.v71fr.mongodb.net/UsersDB", { 
//     useNewUrlParser: true, 
//     useUniifiedTopology: true,
//     useCreateIndex: true
    
//     }) 

db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});


const app = express()
app.use('/', express.static(path.join(__dirname, '../user/registraton.html')))
app.use(bodyParser.json())

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../user/Registration.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })


  app.post('/api/register', async (req, res) => {
	const { username, password: plainTextPassword } = req.body

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.listen(port, () => {
	console.log('App listening at http://localhost:3005')
})

