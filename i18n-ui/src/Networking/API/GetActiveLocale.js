import {l10nServiceUrl} from '../../constants/endpoints'

export default function GetActiveLocale(locale) {
	const url = l10nServiceUrl('/l10n/locale/' + locale)
	try {
		return fetch(url)
			.then((response => response.json()))
	} catch (e) {
		throw e;
	}
}
