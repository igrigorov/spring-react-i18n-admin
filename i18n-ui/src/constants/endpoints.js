import {isProduction, devBaseUrl, prodBaseUrl, isLocal, localBaseUrl} from '../envConfig'

const L10N_URL = '/l10n';

const createServiceUrl = endpointUrl => url => BASE_URL.concat(endpointUrl.concat(url));

const createFullUrl = baseUrl => serviceUrl => baseUrl.concat(serviceUrl);

export const BASE_URL = isProduction ? prodBaseUrl : isLocal ? localBaseUrl : devBaseUrl;
export const fullUrl = createFullUrl(BASE_URL);

export const l10nServiceUrl = createServiceUrl(L10N_URL);
