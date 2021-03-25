

const typeorm = require('typeorm');

class cryptoPrices {
    constructor(price) {
        this.price = price;
    }    
}

const EntitySchema = require("typeorm").EntitySchema; 


const cryptoPricesSchema = new EntitySchema({
    name: "Crypto Prices",
    target: cryptoPrices,
    columns: {
       
       
        Price: {
            type: "text"
        }
    }
});


async function getConnection() {
    return await typeorm.createConnection({
        type: "mysql",
        host: "localhost",
        port: 3300,
        username: "root",
        password: "password",
        database: "INDE_612",
        synchronize: true,
        logging: false,
        entities: [
            cryptoPricesSchema
        ]
    })
}


async function getAllcryptoPrices() {
    const connection = await getConnection();
    const cryptoPricesRepo = connection.getRepository(cryptoPrices);
    const cryptoPrices = await cryptoPricesRepo.find();
    connection.close();
    return cryptoPrices;
}


async function insertcryptoPrices(img, name, price) {
    const connection = await getConnection();
    
    // create
    const cryptoPrices= new CryptoPrices();
    cryptoPrices.price = price;

    // save
    const cryptoPricesRepo = connection.getRepository(Creator);
    const res = await cryptoPricesRepo.save(creator);
    console.log('saved', res);

    // return new list
    const allcryptoPrices = await cryptoPricesRepo.find();
    connection.close();
    return allcryptoPrices;

}


module.exports = {

    getAllcryptoPrices,
    insertcryptoPrices

}




// const { username, password: plainTextPassword } = req.body

// 	if (!username || typeof username !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid username' })
// 	}

// 	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
// 		return res.json({ status: 'error', error: 'Invalid password' })
// 	}

// 	if (plainTextPassword.length < 5) {
// 		return res.json({
// 			status: 'error',
// 			error: 'Password too small. Should be atleast 6 characters'
// 		})
// 	}

// 	const password = await bcrypt.hash(plainTextPassword, 10)

// 	try {
// 		const response = await User.create({
// 			username,
// 			password
// 		})
// 		console.log('User created successfully: ', response)
// 	} catch (error) {
// 		if (error.code === 11000) {
// 			// duplicate key
// 			return res.json({ status: 'error', error: 'Username already in use' })
// 		}
// 		throw error
// 	}

// 	res.json({ status: 'ok' })
// })

