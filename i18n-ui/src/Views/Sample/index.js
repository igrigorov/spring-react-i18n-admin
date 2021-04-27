import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class SamplePage extends Component {

	render() {
		return (
			<div>
				<h1 align="center">Internationalization Administration</h1>
				<Button><Link to="/Admin">Admin Page</Link></Button>
			</div>)
	}
}

export default SamplePage;

