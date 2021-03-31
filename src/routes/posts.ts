import express, { Router } from "express";

const postsRoute: Router = express.Router();

// Routes
postsRoute.get("/", (_request, _response) => {
	_response.send("We are on posts");
});
postsRoute.get("/special", (_request, _response) => {
	_response.send("We are on SPECIAL posts");
});

module.exports = postsRoute;
