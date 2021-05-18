import * as React from 'react';
import {Button, Checkbox, TextField} from "@material-ui/core";
import MaterialTable from "material-table";
import {useTranslation} from 'react-i18next';
import {DelayInput} from "react-delay-input/lib/Component";
import UpdateExistingEntry from "../../Networking/API/UpdateExistingEntry"
import {locales} from "../../language/i18n";
import GetAll from "../../Networking/API/GetAll";

export default function AdminTable() {
	const tableRef = React.useRef();
	const [data, setData] = React.useState([]);

	const [headers, setHeaders] = React.useState([]);

	const [t] = useTranslation();

	/**
	 * Fetching all translations
	 * Make use of GetAll function instead of a hardcoded fetch
	 */

	React.useEffect(() => {
		GetAll()
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
							save: true
						})
				})
				setHeaders(tempHeader);
				return setData(tableData)
			})
	}, [])

	const handleChangeCheckbox = (event) => (row) => {
		let temp = data;
		row.save = false;
		row.active = event.target.checked
		temp[row.tableData.id] = row;
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

	const handleChangeKeyTextField = (event) => (row) => {
		if (event.key === "Enter") {
			handleChangeSaveButton(event)(row)
		}
	};

	const handleChangeSaveButton = () => async (row) => {
		let values = [];
		for (const lang in locales) {
			for (const key in row) {
				if (lang === key.toLowerCase()) {
					values.push({
						localeName: key,
						value: row[key]
					})
				}
			}
		}
		let requestForm = {active: row.active, values};
		let response = await UpdateExistingEntry(requestForm, row.lic);
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
			width: null,
			cellStyle: {
				padding: "10px",
				width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.05 : "0px",
			},
			headerStyle: {
				padding: "10px",
				width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.05 : "0px",
			},
			render: (row) => (
				<Checkbox
					checked={row.active}
					onChange={(e) => handleChangeCheckbox(e)(row)}
					inputProps={{'aria-label': 'primary checkbox',}}
					color="primary"
				/>
			)
		},
		{
			title: "LIC",
			field: "lic",
			width: null,
			cellStyle: {
				padding: "10px",
				width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.15 : "0px",
			},
			headerStyle: {
				padding: "10px",
				width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.15 : "0px",
			},
		}
	];

	/**
	 * Dynamically add locale columns
	 */

	if (headers.length > 0) {
		let width = ((100 - 25) / headers.length) / 100;
		for (let i = 0; i < headers.length; i++) {
			columns.push({
				title: headers[i],
				field: headers[i],
				// divide the width equally between all locale columns
				width: null,
				cellStyle: {
					padding: "10px",
					width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * width : "0px",
				},
				headerStyle: {
					padding: "10px",
					width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * width : "0px",
				},
				render: (row) => (
					<DelayInput id={row.tableData.id + headers[i]}
								element={TextField}
								minLength={0}
								delayTimeout={300}
								onChange={(e) => handleChangeTextField(e)(row)}
								onKeyUp={(e) => handleChangeKeyTextField(e)(row)}
								multiline
								value={row[headers[i]]}
								style = {/* This is in order the text fields to fill the whole column */
									{width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * width : "0px"}}
					/>)
			});
		}
	}
	columns.push({
		title: "",
		field: "save",
		width: null,
		cellStyle: {
			padding: "10px",
			width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.05 : "0px",
		},
		headerStyle: {
			padding: "10px",
			width: tableRef.current ? tableRef.current.tableContainerDiv.current.offsetWidth * 0.05 : "0px",
		},
		render: (row) => (
			<Button style={{textTransform: 'none'}}
					variant="contained"
					disabled={row.save}
					onClick={(e) => handleChangeSaveButton(e)(row)}>
				{t("admin.Save")}
			</Button>
		)
	})
	return (
		<MaterialTable
			tableRef={tableRef}
			columns={columns}
			data={data}
			title={""}
			localization={{
				toolbar: {
					searchPlaceholder: t("admin.Search")
				}
			}}
			options={{
				search: true,
				paging: false,
				tableLayout: "auto",
				maxBodyHeight: 580,
			}}
		/>
	)

}
