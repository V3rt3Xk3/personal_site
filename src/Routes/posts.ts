import express, { Router } from "express";
import BlogPost from "../DataModels/BlogPostModel";

const postsRoute: Router = express.Router();

// Routes
postsRoute.post("/blog_insert", async (_request, _response) => {
	console.log(_request.body);

	const post = new BlogPost({
		title: _request.body.title,
		content: _request.body.content,
	});

	try {
		const savedPost = await post.save();
		_response.json(savedPost);
	} catch (_error) {
		_response.json({ message: _error });
	}
});
postsRoute.post("/special", (_request, _response) => {
	console.log(_request.body);
});

module.exports = postsRoute;
