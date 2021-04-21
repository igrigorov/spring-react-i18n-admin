import * as React from 'react';
import {Checkbox, TextField} from "@material-ui/core";
import MaterialTable from "material-table";

export default function Sample() {

	const [checked, setChecked] = React.useState(true);

	const [data, setData] = React.useState([]);

	const [headers, setHeaders] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:8080/l10n/l10n")
			.then((response => response.json()))
			.then((json) => {
				let temp = [];
				let tempHeader = [];
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
					if (!tempHeader.includes(o.locale)) tempHeader.push(o.locale);
					if (!find && !constructor) temp.push({
						lic: o.lic,
						active: o.active,
						[o.locale]: o.value
					})
				})
				setHeaders(tempHeader);
				return setData(temp)
			})
	}, [])

	const handleChange = (event, data) => {
		setChecked(!data);
		//console.log(event.target.checked, data);
	};
	let columns = [
		{
			title: "Active",
			field: "active",
			render: (data) => (
				<Checkbox
					checked={data.active}
					onChange={(e, data) => handleChange(e, data)}
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
				title: headers[i], field: headers[i], /*render: () => (
					<TextField defaultValue={data.[headers[i]]}/>)*/
			});
		}
	}
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
