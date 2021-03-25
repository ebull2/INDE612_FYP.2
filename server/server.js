
const express = require('express')
const path = require('path')

const mongoose = require('mongoose')
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const port = 3005
var db = mongoose.connection


const JWT_SECRET = 'asdjkfh8923yghjkksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ethan-admin:Andoer-44@@clusterinde612.v71fr.mongodb.net/UsersDBretryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("UsersDB").collection("users");
  // perform actions on the collection object
  client.close();
});



db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});

const bodyParser = require('body-parser')
const app = express()
app.use('/', express.static(path.join(__dirname, '../public/Registration.html')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
  }));


  app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(__dirname, '../public/registration.html')
	); 
});

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/Registration.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })


  app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})


  
app.post('/api/register', async (req, res) => {
	const { username, password: plainTextPassword } = req.body

	const password = await bcrypt.hash(plainTextPassword, 10)


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

		try {

			const response = await User.create({
				username,
				password
			})
			console.log('User Created Successfully: ', response)
		} catch (error) {

			if (error.code === 11000) {
 
			console.log(JSON.stringify(error))
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({status: 'Ok' })
	

  })


app.listen(port, () => {
	console.log("App listening at http://localhost:3005")
})


