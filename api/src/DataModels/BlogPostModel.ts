import Mongoose from "mongoose";

export interface IBlogPost extends Mongoose.Document {
	title: string;
	content: string;
}

const BlogPostSchema: Mongoose.Schema = new Mongoose.Schema({
	//HACK: As it turns out, even if you want to add ids nometime, you shouldn't mention them here.
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
