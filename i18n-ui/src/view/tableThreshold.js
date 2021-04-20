import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {Checkbox, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {Component, useState} from "react";
import MaterialTable from "material-table";
import {TextFields} from "@material-ui/icons";



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

	const [checked, setChecked] = React.useState(true);

	const handleChange = (event, data) => {
		setChecked(!data);
		console.log(event.target.checked, data);
	};

	let columns = [
		{
			title: "Active",
			field: "active",
			render: (data) => (
				console.log(data),
					<Checkbox
						checked={data.active}
						onChange={(e, data) => handleChange(e, data)}
						inputProps={{'aria-label': 'primary checkbox',}}
						color="primary"
					/>
			)
		},
		{title: "lic", field: "lic"},
		{
			title: "BG", field: "BG", render: (data) => (
				<TextField defaultValue={data.BG}/>)
		},
		{
			title: "EN", field: "EN", render: (data) => (
				<TextField defaultValue={data.EN}/>)
		}
	];


	return (
		<MaterialTable
			columns={columns}
			data={rows}
			title={""}
			options={{
				search: true,
				paging: false,
				tableLayout: "auto",
				maxBodyHeight: 580,
			}}/>)

}
