process.env.NODE_ENV = "test";

const expect = require("chai").expect;
import request = require("supertest");
import Mongoose from "mongoose";

import BlogPost from "../../DataModels/BlogPostModel";
import fs from "fs";

import { normalizePort } from "../../Utilities/normalizePort";

const api = require("./../../index.ts");
const dbHandler = require("./../../dbHandler.ts");

const PORT = normalizePort(process.env.PORT || "9000");
const HOST = `http://localhost:${PORT}`;

import { Data } from "./testBlogData";
const testBlogData = Data.BlogPosts;

describe("api", () => {
	describe("BlogMethods API", () => {
		beforeEach((done) => {
			BlogPost.countDocuments({}).then((_count) => {
				if (_count != 0) {
					Mongoose.connection.collections["blogposts"].drop().then(
						() => {
							// console.log("Dropped blogposts collection");
							BlogPost.insertMany(testBlogData).then(
								() => {
									// console.log("Inserted 3 documents");
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
				} else {
					BlogPost.insertMany(testBlogData).then(
						() => {
							// console.log("Inserted 3 documents");
							done();
						},
						(_error) => {
							throw _error;
						}
					);
				}
			});
		});

		after((done) => {
			dbHandler.dbClose();
			done();
		});

		//CRUD - Create
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

		//CRUD Retrieve
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
		//CRUD Update
		it(
			"/updatebyblogid/:blogId " +
				"- Should update blogpost with title: 'TITLE2' to 'UPDATED TITLE2'",
			(done) => {
				const updateRequest = {
					title: "UPDATED TITLE2",
				};
				request(HOST)
					.patch("/blogmethods//updatebyblogid/000000000000000000000002")
					.send(updateRequest)
					.expect(() => {
						// Check whether the new title is alive
						BlogPost.find({ title: "UPDATED TITLE2" }).then((_queryResult) => {
							expect(_queryResult).to.have.length(1);
						});
					})
					.expect(() => {
						// Checks whether the old title is alive
						BlogPost.find({ title: "TITLE2" }).then((_queryResult) => {
							expect(_queryResult).to.be.empty;
						});
					})
					.expect(200, done);
			}
		);
		//CRUD Delete
		it(
			"/blogmethods/deleteblogbyid/:blogId " +
				"- Should delete an element in mock DB (Title: 'TITLE2)'",
			(done) => {
				request(HOST)
					.delete("/blogmethods/deleteblogbyid/000000000000000000000002")
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
