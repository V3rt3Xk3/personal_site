import express from "express";

const app = express();

// Middlewares

// Routes
app.get("/", (_request, _response) => {
	_response.send("We are on home");
});

// Listening for a port
app.listen(3000);
