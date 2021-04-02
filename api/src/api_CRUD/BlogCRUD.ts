import express, { Router } from "express";
import BlogPost from "../DataModels/BlogPostModel";

const BlogCRUD: Router = express.Router();

// Blog POSTS - CREATE
// Have a test
BlogCRUD.post("/bloginsertone", async (_request, _response) => {
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

// Blog GETS - RETRIEVE
// Have a test
BlogCRUD.get("/blogs", async (_request, _response) => {
	try {
		const blogEntry = await BlogPost.find();
		_response.json(blogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

// Have a test
BlogCRUD.get("/blogbyid/:blogId", async (_request, _response) => {
	try {
		const blogEntry = await BlogPost.findById(_request.params.blogId);
		_response.json(blogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

// blog UPDATES - UPDATE
// Have a test
BlogCRUD.patch("/updatebyblogid/:blogId", async (_request, _response) => {
	try {
		const updateBlogEntry = await BlogPost.updateOne(
			{
				_id: _request.params.blogId,
			},
			{ $set: { title: _request.body.title, content: _request.body.content } }
		);
		_response.json(updateBlogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

// blog DELETES - DELETE
// Have a test
BlogCRUD.delete("/deleteblogbyid/:blogId", async (_request, _response) => {
	try {
		const removedBlogEntry = await BlogPost.deleteOne({
			_id: _request.params.blogId,
		});
		_response.json(removedBlogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

module.exports = BlogCRUD;
