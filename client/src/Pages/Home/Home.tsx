import React from "react";
import logo from "./../../logo.svg";
import profilepic from "./profilepic.jpg";
import "./Home.css";

interface IHomeState {
	isLoading: boolean;
}

class Home extends React.Component<any, IHomeState> {
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
			<main className="home-wrapper">
				<img id="ProfilePic" src={profilepic} alt="Profile" />
				<header className="text-center">
					<h1>Zoltán Balázs</h1>
				</header>
				<section className="row text-justify">
					<div className="col-3"></div>
					<div className="col-6">
						<p>
							I am a resilient being, who is not scared from challenges. I have
							been on the road of self discovery in the past 5 years and I would
							be eager to try myself out in a Computer Engineering / Software
							development role.
						</p>
						<p>
							Currently enrolled in computer engineer M.Sc. program at Obuda
							University. I have junior level of experience in python, with data
							manipultation and web development. The experience comes from my
							research background and a personal project that is half-way done
							atm. I am also capable to write code in C# (.NET) or javascript.
							For most of my work I am using git as version control, however the
							commit messages might need polishing.
						</p>
					</div>
					<div className="col-3"></div>
				</section>
				<header className="text-center" id="bio-header">
					<h2>My life in a nutshell</h2>
				</header>
				<section className="row text-justify birth">
					<div className="col-5"></div>
					<div className="col-3">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
							corrupti doloribus minus quidem iure ipsam, ut mollitia. Iure,
							tempore aperiam tempora quam temporibus suscipit, perspiciatis
							doloremque ut ea, nam maiores culpa voluptas corrupti esse libero.
						</p>
					</div>
					<div className="col-4"></div>
				</section>
				<section className="row text-justify bme">
					<div className="col-3"></div>
					<div className="col-5">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
							corrupti doloribus minus quidem iure ipsam, ut mollitia. Iure,
							tempore aperiam tempora quam temporibus suscipit, perspiciatis
							doloremque ut ea, nam maiores culpa voluptas corrupti esse libero.
						</p>
					</div>
					<div className="col-4"></div>
				</section>
				<section className="row text-justify aau">
					<div className="col-3"></div>
					<div className="col-5">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
							corrupti doloribus minus quidem iure ipsam, ut mollitia. Iure,
							tempore aperiam tempora quam temporibus suscipit, perspiciatis
							doloremque ut ea, nam maiores culpa voluptas corrupti esse libero.
						</p>
					</div>
					<div className="col-4"></div>
				</section>
				<section className="row text-justify oe">
					<div className="col-3"></div>
					<div className="col-4">
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
							corrupti doloribus minus quidem iure ipsam, ut mollitia. Iure,
							tempore aperiam tempora quam temporibus suscipit, perspiciatis
							doloremque ut ea, nam maiores culpa voluptas corrupti esse libero.
						</p>
					</div>
					<div className="col-5"></div>
				</section>
				<section className="row text-justify">
					<div className="col-2"></div>
					<div className="col-8 destination"></div>
					<div className="col-2"></div>
				</section>
				<div className="bottom-placeholder"></div>
			</main>
		);
	}
}

export default Home;
