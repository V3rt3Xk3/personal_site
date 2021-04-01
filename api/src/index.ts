//Setting up express
import express from "express";
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

const app = express();

//Route MIddlewares
//Posts
// i am unsure whether this is the best way to do it
app.use("/blogmethods", express.json({ limit: "1mb" }));
app.use("/blogmethods", BlogCRUD);
// Listening for a port
app.listen(3000);
