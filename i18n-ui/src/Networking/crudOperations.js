import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:8080/l10n",
	headers: {
		"Content-type": "application/json",
		"Access-Control-Allow-Origin": "*"
	}
});
