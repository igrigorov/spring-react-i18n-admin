import React, {Component} from 'react'
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextareaAutosize,
	TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import 'react-dropdown/style.css';
import {TextArea} from "semantic-ui-react";


class SamplePage extends Component {

	render() {
		return (
			<div>
				<h1 align="center">Internationalization Administration</h1>
				<div style={{
					display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
					alignItems: 'center', width: '100%', marginBottom: '20px'
				}}>
					<div style={{
						display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
						alignItems: 'center', width: '100%'
					}}>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
						<TextField label="Text Field" defaultValue="Medium" variant="outlined"/>
					</div>
				</div>
				<div style={{
					display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
					width: '100%'
				}}>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
						width: '15%', marginBottom: '20px'
					}}>
						<FormControl variant="outlined" style={{width: '35%', marginBottom: '20px'}}>
							<InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={10}
								label="Dropdown"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Medium</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" style={{width: '35%', marginBottom: '20px'}}>
							<InputLabel id="demo-simple-select-outlined-label">Dropdown</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={10}
								label="Dropdown"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Medium</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
						marginBottom: '20px', alignItems: 'end', width: '80'
					}}>
						<form>
							<TextareaAutosize style={{minHeight: 130, width: 730, alignItems: "left"}}
											  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
						</form>
					</div>
				</div>
				<div></div>
				<div></div>
				<div><Button><Link to="/Admin">Admin Page</Link></Button></div>
			</div>
		)
	}
}

export default SamplePage;

