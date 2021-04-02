import Mongoose from "mongoose";
const ObjectId = Mongoose.Types.ObjectId;

export const Data = {
	BlogPosts: [
		{
			_id: new ObjectId("000000000000000000000001"),
			title: "TITLE1",
			content: "CONTENT1",
		},
		{
			_id: new ObjectId("000000000000000000000002"),
			title: "TITLE2",
			content: "CONTENT2",
		},
		{
			_id: new ObjectId("000000000000000000000003"),
			title: "TITLE3",
			content: "CONTENT3",
		},
	],
};
