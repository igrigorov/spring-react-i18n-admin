import React, {Component} from 'react'
import {
	Button, Checkbox,
	FormControl, FormControlLabel, FormGroup, FormLabel, Icon,
	InputLabel,
	MenuItem, Radio, RadioGroup,
	Select, Switch,
	TextareaAutosize,
	TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import 'react-dropdown/style.css';
import {TextArea} from "semantic-ui-react";
import CancelIcon from '@material-ui/icons/Cancel';
import {AccountBox} from "@material-ui/icons";
import GetActiveLocale from '../../Networking/API/GetActiveLocale'
import {useTranslation} from 'react-i18next';

export default function SamplePage() {


	const RetrieveLocale = (loc) => {
		console.log(t);
	}
	const [t] = useTranslation();

	return (
		<div>
			<div style={{
				display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				<div style={{display: 'flex', width: '10%', justifyContent: 'space-around'}}>
					<Button variant="contained" onClick={() => RetrieveLocale("EN")}>EN</Button>
					<Button variant="contained" onClick={() => RetrieveLocale("BG")}>BG</Button>
				</div>
				<div style={{display: 'flex', width: '80%', alignItems: 'center', justifyContent: 'space-around'}}>
					<h1>Internationalization Administration</h1>
				</div>
				<div style={{display: 'flex', width: '10%', justifyContent: 'space-around'}}>
					<Button variant="contained" endIcon={<AccountBox/>}>
						<Link to="/Admin">Admin Page</Link>
					</Button>
				</div>
			</div>
			<div style={{
				display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				<div style={{
					display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
					alignItems: 'center', width: '100%', marginBottom: '20px'
				}}>
					<TextField label={t("sample.textArea")} defaultValue="Medium" variant="outlined"/>
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
				width: '100%',
			}}>
				<div style={{
					display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
					width: '33%', marginBottom: '20px', alignItems: 'center'
				}}>
					<FormControl variant="outlined" style={{width: '44%', marginBottom: '20px'}}>
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
					<FormControl variant="outlined" style={{width: '44%', marginBottom: '20px'}}>
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
					marginBottom: '20px', alignItems: 'center', width: '66%'
				}}>
					<form>
						<TextArea style={{minHeight: 130, width: 730, alignItems: "left"}}
								  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
					</form>
				</div>
			</div>
			<div style={{
				display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				<div style={{
					display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
					alignItems: 'center', width: '100%', marginBottom: '20px'
				}}>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<FormControl color="secondary" variant="outlined" style={{backgroundColor: '#E0EAFF'}}>
							<FormLabel>Radio Group</FormLabel>
							<RadioGroup value={"option1"}>
								<FormControlLabel
									control={<Radio/>}
									label="Option 1"
									value="option1"
								/>
								<FormControlLabel
									control={<Radio/>}
									label="Option 2"
									value="option2"
								/>
								<FormControlLabel
									control={<Radio/>}
									label="Option 3"
									value="option3"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<FormControl color="secondary" variant="outlined" style={{backgroundColor: '#E0EAFF'}}>
							<FormLabel>Checkbox Group</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={true} name="choice1"/>}
									label="Choice 1"
								/>
								<FormControlLabel
									control={<Checkbox checked={false} name="choice2"/>}
									label="Choice 2"
								/>
								<FormControlLabel
									control={<Checkbox checked={false} name="choice3"/>}
									label="Choice 3"
								/>
							</FormGroup>
						</FormControl>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<FormControl color="secondary" variant="outlined" style={{backgroundColor: '#E0EAFF'}}>
							<FormLabel>Switch Group</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Switch checked={true} name="on1"/>}
									label="On 1"
								/>
								<FormControlLabel
									control={<Switch checked={false} name="off2"/>}
									label="Off 2"
								/>
								<FormControlLabel
									control={<Switch checked={false} name="off3"/>}
									label="Off 3"
								/>
							</FormGroup>
						</FormControl>
					</div>
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
				<div><Button variant={"outlined"} startIcon={<CancelIcon/>}>Cancel</Button></div>
				<div>
					<Button variant={"outlined"}>Left</Button>
					<Button variant={"outlined"}>Middle</Button>
					<Button variant={"outlined"} style={{outlineColor: 'aqua'}}>Right Medium</Button>
				</div>
				<div><Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Submit</Button></div>
			</div>
		</div>
	)
}

