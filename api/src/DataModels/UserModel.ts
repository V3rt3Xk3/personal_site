import Mongoose from "mongoose";

export interface IUser extends Mongoose.Document {
	username: string;
	email: string;
}

const UserSchema: Mongoose.Schema = new Mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

export default Mongoose.model<IUser>("User", UserSchema);
