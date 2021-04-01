import React from "react";
import { Blog } from "./Core/Models/Blog";
import logo from "./logo.svg";
import "./App.css";
import BlogService from "./Core/Services/BlogService";
import { BlogCard } from "./Components/BlogCard";



interface IBlogProps {
	match: any;
}

interface IBlogState{
	isLoading: boolean;
	blogs: Array<Blog>;
}

class App extends React.Component<IBlogProps, IBlogState> {

	constructor(props:any) {
		super(props);

		this.state = {
			isLoading: true,
			blogs: [],
		}
	}

	async componentDidMount(){
		const blogs = await BlogService.GetBlogs();

		this.setState({
			isLoading: false,
			blogs: blogs,
		})
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<img alt="This is a loding img for testing" src={logo}></img>
				</div>
			)
		}
		return (
			<main>
				{this.state.blogs.map((blog) => {
					return (
						<BlogCard blog={blog} key={blog._id} />
					)
				})}
			</main>
		);
	}
}

export default App;
