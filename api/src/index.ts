//Setting up express
import express = require("express");
const cors = require("cors");
import { normalizePort } from "./Utilities/normalizePort";
const BlogCRUD = require("./api_CRUD/BlogCRUD");
//Setting up the DB
const dbHandler = require("./dbHandler.ts");
import Mongoose from "mongoose";

const initializeServer = () => {
	// These 3 lines intialize and set the port for the app
	const app = express();
	const apiPort = normalizePort(process.env.PORT || "9000");
	app.set("port", apiPort);
	app.use(cors());

	//Route MIddlewares
	//Posts
	// i am unsure whether this is the best way to do it
	app.use("/blogmethods", express.json({ limit: "1mb" }));
	app.use("/blogmethods", BlogCRUD);
	// Listening for a port
	app.listen(app.get("port"));
};

//I use this so i can test everything out.
dbHandler.dbConnect().then(initializeServer());
const dbConnection = Mongoose.connection;
dbConnection.on(
	"error",
	console.error.bind(console, "MongoDB connection ERROR:")
);
