import * as React from 'react';
import {Button, Checkbox, TextField} from "@material-ui/core";
import MaterialTable from "material-table";
import {useTranslation} from 'react-i18next';
import {DelayInput} from "react-delay-input/lib/Component";
import UpdateExistingEntry from "../../Networking/API/UpdateExistingEntry"
import {locales} from "../../language/i18n";

export default function AdminTable() {

	const [data, setData] = React.useState([]);

	const [headers, setHeaders] = React.useState([]);

	const [t] = useTranslation();

	/**
	 * Fetching all translations
	 */

	React.useEffect(() => {
		fetch("http://localhost:8080/l10n/l10n")
			.then((response => response.json()))
			.then((json) => {
				let tableData = [];
				let tempHeader = [];
				json.forEach((entry) => {
					let find = false;

					if (tableData.length === 0) {
						tableData.push({
							lic: entry.lic,
							active: entry.active,
							[entry.locale]: entry.value,
							save: true
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
							[entry.locale]: entry.value,
							save : true
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

	const handleChangeTextField = (event) => (row) => {
		let newValue = event.target.value;
		let getColumn = event.target.id.substr(event.target.id.length - 2);
		let temp = data;
		row[getColumn] = newValue;
		row.save = false;
		temp[row.tableData.id] = row;
		setData({...data, ...temp});
	};

	const handleChangeSaveButton = () => async (row) => {
		let values = [];
		Object.keys(locales).forEach(lang => {
			Object.keys(row).forEach(line => {
				if (lang === line.toLowerCase()) {
					values.push({
						localeName: line,
						value: row[line]
					})
				}
			})
		})
		let requestForm = {active: row.active, values};
		let response = await UpdateExistingEntry(requestForm, row.lic);
		console.log(response)
		if (response) {
			let temp = data;
			row.save = true;
			temp[row.tableData.id] = row;
			setData({...data, ...temp});
		}
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
		{title: "LIC", field: "lic"}
	];

	/**
	 * Dynamically add locale columns
	 */

	if (headers.length > 0) {
		for (let i = 0; i < headers.length; i++) {
			columns.push({
				title: headers[i], field: headers[i], render: (row) => (
					<DelayInput id={row.tableData.id + headers[i]}
								element={TextField}
								minLength={0}
								delayTimeout={300}
								onChange={(e) => handleChangeTextField(e)(row)}
								value={row[headers[i]]}/>)
			});
		}
	}
	columns.push({
		title: "", field: "save", render: (row) => (
			<Button style={{textTransform: 'none'}}
					variant="contained"
					disabled={row.save}
					onClick={(e) => handleChangeSaveButton(e)(row)}>
				Save
			</Button>
		)
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
