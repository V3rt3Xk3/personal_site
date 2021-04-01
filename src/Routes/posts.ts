import express, { Router } from "express";
import BlogPost from "../DataModels/BlogPostModel";

const postsRoute: Router = express.Router();

// Routes
postsRoute.post("/blog_insert", (_request, _response) => {
	console.log(_request.body);

	const post = new BlogPost({
		title: _request.body.title,
		content: _request.body.content,
	});

	post
		.save()
		.then((data) => {
			_response.json(data);
		})
		.catch((error) => {
			_response.status(200);
		});
});
postsRoute.post("/special", (_request, _response) => {
	console.log(_request.body);
});

module.exports = postsRoute;
