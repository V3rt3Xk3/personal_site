import express, { Router } from "express";

const postsRoute: Router = express.Router();

// Routes
postsRoute.post("/", (_request, _response) => {
	console.log(_request.body);
});
postsRoute.post("/special", (_request, _response) => {
	console.log(_request.body);
});

module.exports = postsRoute;
