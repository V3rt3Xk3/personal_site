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
	describe("BlogMethods API", () => {
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

		it("/blogmethods/bloginsertone - Should accept valid data", (done) => {
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
				.expect(() => {
					BlogPost.countDocuments({}).then((_count) => {
						expect(_count).to.equal(4);
					});
				})
				.expect(200, done);
		});

		it("/blogmethods/blogs - Should retrieve the number of records in mock DB (3) And return with OK (200)", (done) => {
			request(HOST)
				.get("/blogmethods/blogs")
				.expect((_response) => {
					const responseBody = _response.body;
					expect(responseBody).to.have.lengthOf(3);
					// This one test whether there is an element in the array, with TEST TITLE
				})
				.expect(200, done);
		});
		it(
			"/blogmethods/deleteblogbytitle/:blogTitle " +
				"- Should delete an element in mock DB (Title: 'TITLE2)'",
			(done) => {
				request(HOST)
					.delete("/blogmethods/deleteblogbytitle/TITLE2")
					.expect(() => {
						BlogPost.countDocuments({}, (_error, _count) => {})
							.then((_count) => {
								expect(_count).to.equal(2);
							})
							.then(() => {
								BlogPost.find({ title: "TITLE2" }).then((_queryResult) => {
									//This returns an empty array: []
									expect(_queryResult).to.be.empty;
								});
							});
					})
					.expect(200, done);
			}
		);
	});
});
