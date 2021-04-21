import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {Checkbox, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {Component, useState} from "react";
import MaterialTable from "material-table";
import {TextFields} from "@material-ui/icons";
import {forEach, keys, values} from "ramda";



let rows = [
	{
		active: true,
		lic: "test",
		BG: "София",
		EN: "Sofia"
	},
	{
		active: false,
		lic: "test2",
		BG: "София",
		EN: "Sofia"
	}];


export default function Sample() {

//	const [checked, setChecked] = React.useState(true);

	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:8080/l10n/l10n")
			.then((response => response.json()))
			.then((json) => {
				let temp = [];
				json.map((o) => {
					let find = false;
					let constructor = false;
					if (temp.length === 0) {
						temp.push({
							lic: o.lic,
							active: o.active,
							[o.locale]: o.value
						})
						constructor = true;
					} else {
						for (let i = 0; i < temp.length; i++) {
							if (temp[i].lic === o.lic) {
								find = true;
								temp[i].[o.locale] = o.value;
							}

						}
					}
					if (!find && !constructor) temp.push({
						lic: o.lic,
						active: o.active,
						[o.locale]: o.value
					})
				})
				return setData(temp)
			})
	}, [])

	/*const handleChange = (event, data) => {
		setChecked(!data);
		console.log(event.target.checked, data);
	};*/


	return (
		<MaterialTable
			//columns={columns}
			//data={rows}
			title={""}
			options={{
				search: true,
				paging: false,
				tableLayout: "auto",
				maxBodyHeight: 580,
			}}/>)

}
