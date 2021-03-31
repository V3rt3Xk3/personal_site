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

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "personal_site";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	client.close();
});
