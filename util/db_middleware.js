const User = require("../schema/User");

module.exports = (req, res, next) => {
	req.db = { User: User };
	next();
};
