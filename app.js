require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const userRoute = require("./controller/user");
const { connectDB } = require("./util/db");
const dbMiddleware = require("./util/db_middleware");

const main = async () => {
	dotenv.config({ path: path.join(__dirname, ".env") });
	dotenv.config({ path: path.join(__dirname, ".env.default") });

	const PORT = process.env.PORT || 3000;

	// await connectDB();

	var app = express();
	app.use(express.static("public"));
	app.use(morgan("tiny"));
	app.use(dbMiddleware);

	app.get("/hello", (req, res) => {
		res.send("world");
	});

	app.get("/error", (req, res) => {
		throw new Error("abc");
	});
	app.get("/async_error", async (req, res) => {
		throw new Error("def");
	});
	app.use("/user", userRoute);

	app.use((req, res) => {
		res.setHeader("content-type", "text/html");
		res.sendFile(path.join(__dirname, "public", "index.html"));
	});

	app.use((err, req, res, next) => {
		res.status(500).json({ err: err.message, tor: true });
	});

	// console.log(path.join(__dirname, "public", "index.html"));
	// console.log(PORT);
	console.log(process.env.MONGO_URL);
	app.listen(PORT);
};

main();
