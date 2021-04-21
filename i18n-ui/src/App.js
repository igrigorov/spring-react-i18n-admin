import './App.css';
import Sample from "./view";
import {Button, Switch} from "@material-ui/core";
import React from 'react'
import APIOperations from './Networking/API/l10nAPI'


function App() {

	return (
		<div className="table">
			<h1 align="center">Internationalization Administration</h1>
			<Sample/>
		</div>

	);
}

export default App;
