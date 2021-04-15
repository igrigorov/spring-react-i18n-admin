import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {FormControlLabel, Switch, TextField} from "@material-ui/core";
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
	}, {
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
	}, {
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
	}, {
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
	}, {
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
	}, {
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
	},];


/*
const changeRow = (oldRow, e) => {
	const changeData = { [e.target.name]: e.target.checked };
	const newRow = { ...oldRow, ...changeData };

	console.log(oldRow, e);
	const prvSt=this.state.changed;
	const index = rows.findIndex(dtaRow => dtaRow.id === oldRow.id);
	const newData = rows;
	newData[index] = newRow;
	this.setState({changed: !oldRow.active})
	console.log(newData);
};
*/




let columns = [
	{
		title: "Active",
		field: "active",
		render: (data) => (
			<Switch
				checked={data.active}
				//onChange={handleChange}
				name="active"
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



export default class Sample extends Component {

	render() {
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
}