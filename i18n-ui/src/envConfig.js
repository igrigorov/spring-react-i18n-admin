const parseBoolean = value => {
	switch (value.toLowerCase()) {
		case 'false':
			return false;
		case 'true':
			return true;
		default:
			throw new Error('Wrong boolean format.');
	}
};

export const isProduction = parseBoolean(process.env.REACT_APP_PROD);
export const isLocal = parseBoolean(process.env.REACT_APP_LOCAL);
export const hasNoBaseUrl = parseBoolean(process.env.REACT_APP_NO_BASEURL);
export const prodBaseUrl = process.env.REACT_APP_PROD_DOMAIN;
export const devBaseUrl = process.env.REACT_APP_DEV_DOMAIN;
export const localBaseUrl = process.env.REACT_APP_LOCAL_DOMAIN;

export const appVersion = process.env.REACT_APP_VERSION;
