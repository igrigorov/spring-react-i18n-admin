import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';

/**
 *The languages/locales for i18n to change
 */
export const locales = {
	en: 'en',
	bg: 'bg'
};

const getAppLanguageFromLocalStorage = localStorageKey =>
	localStorage.getItem(localStorageKey) || locales.bg;
const setAppLanguageInLocalStorage = localStorageKey => language =>
	localStorage.setItem(localStorageKey, language);
const localStorageKey = 'i18nextLng';

const persistLanguage = setAppLanguageInLocalStorage(localStorageKey);


export const changeLanguage = language => {
	i18n
		.changeLanguage(language)
		.then(() => {
			persistLanguage(language);
			return Promise.resolve();
		})
		.catch(error => Promise.reject(error));
};

const backendOptions = {
	// path where resources get loaded from, or a function
	// returning a path:
	// function(lngs, namespaces) { return customPath; }
	// the returned path will interpolate lng, ns if provided like giving a static path
	//
	// If allowMultiLoading is false, lngs and namespaces will have only one element each,
	// If allowMultiLoading is true, lngs and namespaces can have multiple elements
	loadPath: 'http://localhost:8080/l10n/locale/{{lng}}',

	// path to post missing resources
	addPath: 'http://localhost:8080/l10n/locale/{{lng}}',

	// your backend server supports multiloading
	// /locales/resources.json?lng=de+en&ns=ns1+ns2
	// Adapter is needed to enable MultiLoading https://github.com/i18next/i18next-multiload-backend-adapter
	// Returned JSON structure in this case is
	// {
	//  lang : {
	//   namespaceA: {},
	//   namespaceB: {},
	//   ...etc
	//  }
	// }
	allowMultiLoading: false, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading

	// parse data after it has been fetched
	// in example use https://www.npmjs.com/package/json5
	// here it removes the letter a from the json (bad idea)
	// parse: function(data) { return data.replace(/a/g, ''); },

	// parse data before it has been sent by addPath
	// parsePayload: function(namespace, key, fallbackValue) { return { key } },

	// allow cross domain requests
	// crossDomain: false,

	// allow credentials on cross domain requests
	// withCredentials: false,

	// overrideMimeType sets request.overrideMimeType("application/json")
	overrideMimeType: false

	// TODO ::: check if reload needed
	// reloadInterval: false // can be used to reload resources in a specific interval (useful in server environments)
};

i18n
	// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		backend: backendOptions,
		lng: getAppLanguageFromLocalStorage(localStorageKey),
		whitelist: [locales.en, locales.bg],
		nonExplicitWhitelist: false,
		// resources,
		fallbackLng: locales.bg,
		keySeparator: false,
		nsSeparator: false,
		// debug: true,
		lowerCaseLng: true,
		interpolation: {
			escapeValue: false // not needed for react as it escapes by default
		}
	});

export default i18n;
