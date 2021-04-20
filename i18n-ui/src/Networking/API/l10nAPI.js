import http from '../crudOperations'

class APIOperations {
	getAll() {
		return http.get("/l10n");
	}

	update(lic, data) {
		return http.put(`/l10n/entry/${lic}`, data);
	}
}

export default new APIOperations();
