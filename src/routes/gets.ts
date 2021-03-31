import express, { Router } from "express";

const getsRoute: Router = express.Router();

// Routes
getsRoute.get("/", (_request, _response) => {
	_response.send("We are on home");
});

module.exports = getsRoute;
