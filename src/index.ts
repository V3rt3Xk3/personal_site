//Setting up express
import express from "express";
const getsRoute = require("./Routes/gets");
const postsRoute = require("./Routes/posts");
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
	},
	() => {
		console.log("connected to DB");
	}
);

const app = express();

//Route MIddlewares
//Posts
// i am unsure whether this is the best way to do it
app.use("/posts", postsRoute);
app.use("/posts", express.json({ limit: "1mb" }));

//Gets
app.use("/gets", getsRoute);
// Listening for a port
app.listen(3000);
