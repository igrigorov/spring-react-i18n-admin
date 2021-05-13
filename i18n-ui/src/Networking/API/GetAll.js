import {l10nServiceUrl} from '../../constants/endpoints'

export default function GetAll() {
	const url = l10nServiceUrl('/l10n')
	try {
		return fetch(url)
			.then((response => response.json()))
	} catch (e) {
		throw e;
	}
}
