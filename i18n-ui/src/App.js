import './App.css';
import React from 'react'
import AdminPage from "./Views/AdminPage";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import SamplePage from "./Views/Sample";
import NotFoundPage from "./Views/NotFoundPage";

function App() {

	return (
		<Router>
			<Switch>
				<Route exact path="/Admin" component={AdminPage}/>
				<Route exact path="/" component={SamplePage}/>
				<Route exact path="/404" component={NotFoundPage}/>
				<Redirect to="/404"/>
			</Switch>
		</Router>

	);
}

export default App;
