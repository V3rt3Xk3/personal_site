//Setting up express
import express from "express";
const cors = require("cors");
import { normalizePort } from "./Utilities/normalizePort";
const BlogCRUD = require("./api_CRUD/BlogCRUD");
//Setting up the DB
import Mongoose from "mongoose";
import { SiteKeys } from "./site_keys";

//DB setup
Mongoose.connect(
	SiteKeys.dbURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		user: SiteKeys.dbUserName,
		pass: SiteKeys.dbUserPassword,
		dbName: SiteKeys.dbName,
	},
	() => {
		console.log("connected to DB");
	}
);

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
