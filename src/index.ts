import express from "express";

const app = express();

// Middlewares

// Routes
app.get("/", (_request, _response) => {
	_response.send("We are on home");
});

// Listening for a port
app.listen(3000);

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
