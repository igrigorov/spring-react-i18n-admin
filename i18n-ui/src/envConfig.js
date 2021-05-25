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

/**
 * Whether the environment is built for production
 * @type {boolean}
 */
export const isProduction = parseBoolean(process.env.REACT_APP_PROD);
/**
 * Whether the environment is built locally
 * @type {boolean}
 */
export const isLocal = parseBoolean(process.env.REACT_APP_LOCAL);
/**
 * Production Base URL from .env
 * @type {boolean}
 */
export const prodBaseUrl = process.env.REACT_APP_PROD_DOMAIN;
/**
 * Development environment Base URL from .env
 * @type {boolean}
 */
export const devBaseUrl = process.env.REACT_APP_DEV_DOMAIN;
/**
 * Local Base URL from .env
 * @type {boolean}
 */
export const localBaseUrl = process.env.REACT_APP_LOCAL_DOMAIN;

/**
 * Application's version from package.json
 * @type {string}
 * */
export const appVersion = process.env.REACT_APP_VERSION;
