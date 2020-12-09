import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Events from "./views/Events/events";
import MeetOurSeniors from "./views/MeetOurSenior/Senior";

import Projects from "./views/Projects/projects";
import AboutUs from "./views/About Us/AboutUs";
import HomePage from "views/Home Page/Homepage";
import Coming from "views/Coming Up/Coming";
import SeniorCouncil from "views/Senior Council/SrCouncil"
import JuniorCouncil from "views/Junior Council/JrCouncil"
// others
import "./index.css"

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/landing-page" render={(props) => <LandingPage {...props} />} />
			<Route path="/profile-page" render={(props) => <ProfilePage {...props} />} />
			<Route path="/register-page" render={(props) => <RegisterPage {...props} />} />

			<Route path={"/events"} exact component={Events} />
			<Route path={"/projects"} exact component={Projects} />
			<Route path={"/member"} exact component={Coming} />

			<Route path={"/AboutUs"} exact component={AboutUs} />
			<Route path={"/meetOurSeniors"} exact component={MeetOurSeniors} />
			<Route path={"/council"} exact component={SeniorCouncil} />
			<Route path={"/juniorCouncil"} exact component={JuniorCouncil} />
			<Route path="/" render={(props) => <HomePage {...props} />} />
			<Redirect to="/" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
