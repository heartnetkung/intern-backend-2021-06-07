const mongoose = require("mongoose");

const MONGO_STRING =
	"mongodb+srv://xxx:yyy@cluster0.zcg9x.mongodb.net/intern?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_STRING, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			autoIndex: false,
		});
	} catch (err) {
		throw new Error(err);
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = { connectDB, disconnectDB };
