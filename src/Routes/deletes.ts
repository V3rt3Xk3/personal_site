import express, { Router } from "express";
import BlogPost from "../DataModels/BlogPostModel";

const deletesRoute: Router = express.Router();

//delete posts
deletesRoute.delete("/deleteblogbyid/:blogId", async (_request, _response) => {
	try {
		const removedBlogEntry = await BlogPost.remove({
			_id: _request.params.blogId,
		});
		_response.json(removedBlogEntry);
	} catch (_error) {
		_response.json({ message: _error });
	}
});

module.exports = deletesRoute;
