import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RecentBlogs from "./Pages/RecentBlogs/RecentBlogs";
import Home from "./Pages/Home/Home";

interface IBlogState {
	isLoading: boolean;
}

class App extends React.Component<any, IBlogState> {
	constructor(props: any) {
		super(props);

		this.state = {
			isLoading: true,
		};
	}

	async componentDidMount() {
		this.setState({
			isLoading: false,
		});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<div>
					<img alt="This is a loding img for testing" src={logo}></img>
				</div>
			);
		}
		return (
			<div>
				<Router>
					<nav className="nav-container">
						<Link className="nav-item" to="/RecentBlogPosts">
							Blog posts
						</Link>
						<Link className="nav-item" to="/">
							Home
						</Link>
						<Link className="nav-item" to="/">
							Contact
						</Link>
					</nav>
					<Route
						exact
						path="/RecentBlogPosts"
						component={() => <RecentBlogs />}
					/>
					<Route exact path="/" component={() => <Home />} />
				</Router>
				<footer className="footer">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Reprehenderit minima explicabo, corporis recusandae tempore iusto
						dicta quas possimus aliquam culpa nam saepe voluptatibus quae
						impedit laboriosam nemo ipsum exercitationem, ut tenetur dolor
						placeat eligendi? Minima corporis dolores iure quos soluta!
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
