export default function GetActiveLocale(url, locale) {
	try {
		return fetch(url + "/l10n/locale/" + locale)
			.then((response => response.json()))
	} catch (e) {
		throw e;
	}
}
