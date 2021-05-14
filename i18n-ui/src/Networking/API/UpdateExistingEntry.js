import {l10nServiceUrl} from '../../constants/endpoints'

export default function UpdateExistingEntry(data, lic) {
	const url = l10nServiceUrl('/l10n/entry/' + lic)
	try {
		return fetch(url, {
			method: 'PUT', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response => response.json()))
	} catch (e) {
		throw e;
	}

}
