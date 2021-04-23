export default function UpdateExistingEntry(url, data, lic) {

	try {
		return fetch(url + "l10n/entry/" + lic, {
			method: 'PUT', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
	} catch (e) {
		throw e;
	}

}
