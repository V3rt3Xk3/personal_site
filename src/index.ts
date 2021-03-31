import express from "express";

const app = express();

// Middlewares

// Routes
app.get("/", (_request, _response) => {
	_response.send("We are on home");
});

// Listening for a port
app.listen(3000);

import { MongoClient } from "mongodb";
import assert from "assert";
import { SiteKeys } from "./site_keys";

// Connection URL
const url = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	console.log(SiteKeys.dbName);

	const db = client.db(SiteKeys.dbName);

	client.close();
});
