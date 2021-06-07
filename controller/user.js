const router = (module.exports = require("express").Router());
// const User = require("../schema/User");

//user routes
router.get("/", async (req, res) => {
	var result = await req.db.User.find();
	// var result = await User.find();
	if (!result.length) return res.status(400).json({ error: "no_user" });
	res.json(result);
});
