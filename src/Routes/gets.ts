import express, { Router } from "express";
import BlogPost from "../DataModels/BlogPostModel";

const getsRoute: Router = express.Router();

// Routes
getsRoute.get("/blogbyid/:blogId", async (_request, _response) => {
	try {
		const blogEntry = await BlogPost.findById(_request.params.blogId);
		_response.json(blogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

getsRoute.get("/blogs", async (_request, _response) => {
	try {
		const blogEntry = await BlogPost.find();
		_response.json(blogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

module.exports = getsRoute;
