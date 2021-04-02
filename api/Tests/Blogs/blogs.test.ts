process.env.NODE_ENV = "test";

const expect = require("chai").expect;
import request = require("supertest");
import Mongoose from "mongoose";

import BlogPost from "./../../src/DataModels/BlogPostModel";
import fs from "fs";

import { normalizePort } from "./../../src/Utilities/normalizePort";

const api = require("./../../src/index.ts");
const dbHandler = require("./../../src/dbHandler.ts");

const PORT = normalizePort(process.env.PORT || "9000");
const HOST = `http://localhost:${PORT}`;

describe("api", () => {
	// before((done) => {
	// 	dbHandler.dbConnect().then(() => {
	// 		return done();
	// 	});
	// });
	beforeEach((done) => {
		Mongoose.connection.collections["blogposts"].drop().then(
			() => {
				// console.log("Dropped blogposts collection");
				const rawTestBlogData = fs.readFileSync(
					"./Tests/Blogs/testBlogData.json",
					"utf8"
				);
				const testBlogData = JSON.parse(rawTestBlogData);
				BlogPost.insertMany(testBlogData.BlogPosts).then(
					() => {
						// console.log("Inserted 2 documents");
						done();
					},
					(_error) => {
						throw _error;
					}
				);
			},
			(_error) => {
				throw _error;
			}
		);
	});

	after((done) => {
		dbHandler.dbClose();
		done();
	});

	it("Should accept valid data", (done) => {
		const goodRequest = {
			title: "TEST TITLE",
			content: "TEST CONTENT",
		};
		request(HOST)
			.post("/blogmethods/bloginsertone")
			.send(goodRequest)
			.expect((_response) => {
				const responseBody = _response.body;
				expect(responseBody).to.contain.property("_id");
				expect(responseBody).to.contain.property("title");
				expect(responseBody).to.contain.property("content");
				expect(responseBody).to.contain.property("date");
			})
			.expect(200, done);
	});

	it("Should retrieve 1 document", (done) => {
		request(HOST)
			.get("/blogmethods/blogs")
			.expect((_response) => {
				const responseBody = _response.body;
				expect(responseBody).to.have.lengthOf(2);
				// This one test whether there is an element in the array, with TEST TITLE
				expect(responseBody.some(Array, { title: "TITLE2" })).to.be.true;
			})
			.expect(200, done);
	});
});
