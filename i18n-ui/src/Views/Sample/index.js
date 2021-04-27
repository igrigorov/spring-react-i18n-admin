import React, {Component} from 'react'
import {
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	NativeSelect,
	Select,
	TextareaAutosize,
	TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
	'one', 'two', 'three'
];
const defaultOption = options[0];

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
					alignItems: 'center', width: '100%'
				}}>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
						width: '50%', marginBottom: '20px'
					}}>
						<FormControl variant="outlined" style={{width: '28%', marginBottom: '20px'}}>
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
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant="outlined" style={{width: '28%', marginBottom: '20px'}}>
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
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<TextareaAutosize></TextareaAutosize>
				</div>
				<div></div>
				<div></div>
				<div><Button><Link to="/Admin">Admin Page</Link></Button></div>
			</div>
		)
	}
}

export default SamplePage;

