export default function GetAll(url) {
	try {
		return fetch(url + "/l10n")
			.then((response => response.json()))
	} catch (e) {
		throw e;
	}
}
