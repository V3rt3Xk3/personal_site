import { Blog } from "../Models/Blog";

export class BlogService {
	private serverURL: string = "http://localhost:9000/blogmethods";

	public GetBlogs = async (): Promise<Array<Blog>> => {
		try {
			const _response = await fetch(`${this.serverURL}/blogs`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			return _response.json();
		} catch (_error) {
			return Promise.reject(_error);
		}
	};

	public GetBlogById = async (Id: string): Promise<Blog> => {
		try {
			const _response = await fetch(`${this.serverURL}/blogbyid/${Id}`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			return _response.json();
		} catch (_error) {
			return Promise.reject(_error);
		}
	};
}

export default new BlogService();
