import React from "react";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RecentBlogs from "./Pages/RecentBlogs";



interface IBlogState{
	isLoading: boolean;
}

class App extends React.Component<any, IBlogState> {

	constructor(props:any) {
		super(props);

		this.state = {
			isLoading: true,
		}
	}

	async componentDidMount(){

		this.setState({
			isLoading: false,
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
			<div className="site-wrapper">
			<Router>
				<nav className="nav-container">
					<Link className="nav-item" to="/RecentBlogPosts">Recent blog posts</Link>
				</nav>
				<main>
					<Route exact path="/RecentBlogPosts" component={() => (<RecentBlogs/>)}/>
				</main>
			</Router>
			</div>
		);
	}
}

export default App;
