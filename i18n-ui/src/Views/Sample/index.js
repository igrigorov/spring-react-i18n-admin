import React from 'react'
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Icon,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Switch,
	TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";
import 'react-dropdown/style.css';
import "../../index.css";
import {TextArea} from "semantic-ui-react";
import CancelIcon from '@material-ui/icons/Cancel';
import {AccountBox} from "@material-ui/icons";
import {useTranslation} from 'react-i18next';
import {changeLanguage, locales} from "../../language/i18n";

export default function SamplePage() {



	const [t] = useTranslation();

	return (
		<div>
			<div style={{
				display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
				alignItems: 'center', width: '100%', marginBottom: '20px'
			}}>
				{/*
				  * Show language selectors
				  */}
				<div style={{display: 'flex', width: '15%',}}>
					{Object.entries(locales).map((localeKVPair) => {
						return <Button variant="contained" onClick={() => changeLanguage(localeKVPair[1])}>{localeKVPair[1]}</Button>;
					})}
				</div>
				<div style={{display: 'flex', width: '70%', alignItems: 'center', justifyContent: 'space-around'}}>
					<h1>{t('sample.title')}</h1>
				</div>
				<div style={{display: 'flex', width: '15%', justifyContent: 'space-around'}}>
					<Button variant="contained" endIcon={<AccountBox/>}>
						<Link to="/Admin">{t('sample.adminPage')}</Link>
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
					<TextField label={t("sample.textField")} variant="outlined"/>
					<TextField label={t("sample.textField")} variant="outlined"/>
					<TextField label={t("sample.textField")} variant="outlined"/>
				</div>
				<div style={{
					display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
					alignItems: 'center', width: '100%'
				}}>
					<TextField label={t("sample.textField")} variant="outlined"/>
					<TextField label={t("sample.textField")} variant="outlined"/>
					<TextField label={t("sample.textField")} variant="outlined"/>
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
						<InputLabel id="demo-simple-select-outlined-label">{t("sample.dropdown")}</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={10}
							label={t("sample.dropdown")}
						>
							<MenuItem value="">
								<em>{t("sample.none")}</em>
							</MenuItem>
							<MenuItem value={10}>{t("sample.medium")}</MenuItem>
						</Select>
					</FormControl>
					<FormControl variant="outlined" style={{width: '44%', marginBottom: '20px'}}>
						<InputLabel id="demo-simple-select-outlined-label">{t("sample.dropdown")}</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={10}
							label={t("sample.dropdown")}
						>
							<MenuItem value="">
								<em>{t("sample.none")}</em>
							</MenuItem>
							<MenuItem value={10}>{t("sample.medium")}</MenuItem>
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
						<FormControl color="secondary" variant="outlined" class={"controlGroup"}>
							<FormLabel>{t("sample.radioGroup")}</FormLabel>
							<RadioGroup value={"option1"}>
								<FormControlLabel
									control={<Radio/>}
									label={t("sample.option") + " 1"}
									value="option1"
								/>
								<FormControlLabel
									control={<Radio/>}
									label={t("sample.option") + " 2"}
									value="option2"
								/>
								<FormControlLabel
									control={<Radio/>}
									label={t("sample.option") + " 3"}
									value="option3"
								/>
							</RadioGroup>
						</FormControl>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<FormControl color="secondary" variant="outlined" class={"controlGroup"}>
							<FormLabel>{t("sample.checkBoxGroup")}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Checkbox checked={true} name="choice1"/>}
									label={t("sample.choice") + " 1"}
								/>
								<FormControlLabel
									control={<Checkbox checked={false} name="choice2"/>}
									label={t("sample.choice") + " 2"}
								/>
								<FormControlLabel
									control={<Checkbox checked={false} name="choice3"/>}
									label={t("sample.choice") + " 3"}
								/>
							</FormGroup>
						</FormControl>
					</div>
					<div style={{
						display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
						alignItems: 'center', width: '100%', marginBottom: '20px'
					}}>
						<FormControl color="secondary" variant="outlined" class={"controlGroup"}>
							<FormLabel aria-grabbed={true}>{t("sample.toggleSwitchGroup")}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<Switch checked={true} name="on1"/>}
									label={t("sample.on") + " 1"}
								/>
								<FormControlLabel
									control={<Switch checked={false} name="off2"/>}
									label={t("sample.off") + " 2"}
								/>
								<FormControlLabel
									control={<Switch checked={false} name="off3"/>}
									label={t("sample.off") + " 3"}
								/>
							</FormGroup>
						</FormControl>
					</div>
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
				<div><Button variant={"outlined"} startIcon={<CancelIcon/>}>{t("sample.cancel")}</Button></div>
				<div>
					<Button variant={"outlined"}>{t("sample.left")}</Button>
					<Button variant={"outlined"}>{t("sample.middle")}</Button>
					<Button variant={"outlined"}>{t("sample.right")}</Button>
				</div>
				<div><Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>{t("sample.submit")}</Button></div>
			</div>
		</div>
	);
}

