import * as React from 'react';
import {Button, Checkbox, TextField} from "@material-ui/core";
import MaterialTable from "material-table";
import {useTranslation} from 'react-i18next';

export default function AdminTable() {

	const [data, setData] = React.useState([]);

	const [headers, setHeaders] = React.useState([]);

	const [t] = useTranslation();

	React.useEffect(() => {
		fetch("http://localhost:8080/l10n/l10n")
			.then((response => response.json()))
			.then((json) => {
				let tableData = [];
				let tempHeader = [];
				json.map((entry) => {
					let find = false;

					if (tableData.length === 0) {
						tableData.push({
							lic: entry.lic,
							active: entry.active,
							[entry.locale]: entry.value
						})
						find = true;
					} else {
						tableData.forEach(item => {
							if (item.lic === entry.lic) {
								find = true;
								item[entry.locale] = entry.value;
							}
						});
					}
					if (!tempHeader.includes(entry.locale))
						tempHeader.push(entry.locale);
					if (!find)
						tableData.push({
							lic: entry.lic,
							active: entry.active,
							[entry.locale]: entry.value
						})
				})
				setHeaders(tempHeader);
				return setData(tableData)
			})
	}, [])

	const handleChangeCheckbox = (event) => (row) => {
		let temp = data;
		temp[row.tableData.id].active = event.target.checked;
		setData({...data, ...temp});
	};

	const handleChangeTextfield = (event) => (row) => {
		/*let temp = data;
		temp[row.tableData.id].active = event.target.checked;
		setData({...data, ...temp});*/
		console.log(row);
	};


	let columns = [
		{
			title: t("admin.active"),
			field: "active",
			render: (row) => (
				<Checkbox
					checked={row.active}
					onChange={(e) => handleChangeCheckbox(e)(row)}
					inputProps={{'aria-label': 'primary checkbox',}}
					color="primary"
				/>
			)
		},
		{title: "lic", field: "lic"},

	];

	if (headers.length > 0) {
		for (let i = 0; i < headers.length; i++) {
			columns.push({
				title: headers[i], field: headers[i], render: (row) => (
					<TextField onChange={(e) => handleChangeCheckbox(e)(row)}
							   defaultValue={row[headers[i]]}/>)
			});
		}
	}
	columns.push({
		title: "", field: "save", render: () => (<Button style={{textTransform: 'none'}} variant="contained" disabled>Save</Button>)
	})
	return (
		<MaterialTable
			columns={columns}
			data={data}
			title={""}
			options={{
				search: true,
				paging: false,
				tableLayout: "auto",
				maxBodyHeight: 580,
			}}/>)

}
