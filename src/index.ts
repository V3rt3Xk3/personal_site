//Setting up express
import express from "express";
const postsRoute = require("./routes/posts");
const getsRoute = require("./routes/gets");
//Setting up the DB
import { MongoClient } from "mongodb";
import assert from "assert";
import { SiteKeys } from "./site_keys";

// Create a new MongoClient
const dbClient: MongoClient = new MongoClient(SiteKeys.dbURL, {
	useUnifiedTopology: true,
});

// Use connect method to connect to the Server
dbClient.connect(function (err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	console.log(SiteKeys.dbName);

	const db = dbClient.db(SiteKeys.dbName);

	dbClient.close();
});

const app = express();

//Route MIddlewares
app.use("/posts", postsRoute);
app.use("/gets", getsRoute);
// Listening for a port
app.listen(3000);
