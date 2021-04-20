import './App.css';
import Sample from "./view";
import {Button, Switch} from "@material-ui/core";
import React from 'react'
import APIOperations from './Networking/API/l10nAPI'

const retrieve = () => {
	APIOperations.getAll().then(response => {
		console.log(response.data);
	})
		.catch(e => {
			console.log(e);
		});
}
function App() {
	return (
		<div className="table">
			<h1 align="center">Internationalization Administration</h1>
			<Button onClick={retrieve} name="testButton" title="Click me"/>
			<Sample/>
		</div>

	);
}

export default App;
