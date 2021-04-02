import { SiteKeys } from "./site_keys";
import Mongoose = require("mongoose");

//DB setup
export function dbConnect() {
	return new Promise<void>((resolve, reject) => {
		if (process.env.NODE_ENV === "test") {
			Mongoose.connect(SiteKeys.dbURL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				user: SiteKeys.dbUserName,
				pass: SiteKeys.dbUserPassword,
				dbName: "developmentdb",
			}).then(
				() => {
					console.log("Connected DEV to DB");
					resolve();
				},
				(_error) => {
					if (_error) return _error;
				}
			);
		} else {
			Mongoose.connect(SiteKeys.dbURL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				user: SiteKeys.dbUserName,
				pass: SiteKeys.dbUserPassword,
				dbName: SiteKeys.dbName,
			}).then(
				() => {
					console.log("Connected to DB");
					resolve();
				},
				(_error) => {
					if (_error) return _error;
				}
			);
		}
	});
}

export function dbClose() {
	return Mongoose.disconnect();
}
