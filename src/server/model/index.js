const mongoose = require('mongoose');
const meta = require('../helper/meta');

const { isDeveloping } = meta;

if (isDeveloping) {
	mongoose.connect('mongodb://localhost/bechdelTest', {
		useMongoClient: true,
	});
} else {
	const options = {
		useMongoClient: true,
		server: {
			socketOptions: {
				keepAlive: 300000,
				connectTimeoutMS: 30000,
			},
		},
		replset: {
			socketOptions: {
				keepAlive: 300000,
				connectTimeoutMS: 30000,
			},
		},
	};
	mongoose.connect(process.env.MONGODB_URI, options);
}
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;
