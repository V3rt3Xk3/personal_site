import Mongoose from "mongoose";

export interface IBlogPost extends Mongoose.Document {
	title: string;
	content: string;
	date: Date;
}

const BlogPostSchema: Mongoose.Schema = new Mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default Mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
