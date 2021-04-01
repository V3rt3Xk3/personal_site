//Setting up express
import express from "express";
const postsRoute = require("./routes/posts");
const getsRoute = require("./routes/gets");
//Setting up the DB
// FIXME: Check out Mongoose for starters
import mongoose from "mongoose";
import { SiteKeys } from "./site_keys";

//DB setup
mongoose.connect(
	SiteKeys.dbURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to DB");
	}
);

const app = express();

//Route MIddlewares
app.use("/posts", postsRoute);
app.use("/gets", getsRoute);
// Listening for a port
app.listen(3000);
