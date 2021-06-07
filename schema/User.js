const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
	{
		email: String,
		password: String,
	},
	{ collection: "user" }
);

module.exports = mongoose.model("user", UserSchema);
