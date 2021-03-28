import { getAuthToken } from './authService';

/**
 * 
 * @param {URL} endPoint 
 * @param {Object} options 
 */
export const processRequest = async (endPoint, options) => {
  try {
    let response = await fetch(endPoint.href, options);
    if(response.ok) {
      response =  await response.json();
      return Promise.resolve(response);
    }
    response = await response.json();
    return Promise.reject({ ...response });

  } catch (error) {
    return Promise.reject({ error:error.message });
  }
};

const combineHeaders = (headers = {}, insecure = false) => {
  const headersAppended = {
    'Content-Type': 'application/json',
    ...headers
  };
  if(!insecure) {
    const token = getAuthToken();
    if(token === null) {
      throw new Error('Authentication token is not available');
    }
    headersAppended.Authorization = `Bearer ${token}`;
  }
  return headersAppended;
};

export const requestBuilder = (options) => {
  const { 
    method, 
    headers, 
    insecure,
    payload
  } = options;
  let request = {
    method: method || REQUEST_METHODS.GET,
    headers: combineHeaders(headers, insecure)
  };
  if(payload) {
    request.body = JSON.stringify(payload);
  }
  return request;
};

/**
 * Replaces path params placeholder with path param object
 * @param {String} url The URL
 * @param {Object} pathParams The path params object
 * @example 
 * // return /u001/project
 * replacePathParamPlaceholder('/:uid/project', {uid:u001})
 * @return {String} contains final url string 
 */
export const replacePathParamPlaceholder = (url, pathParams) => {
  return url
    .split('/')
    .map((token) => {
      const prop = token.replace(':', '');
      return (pathParams[prop]) ? pathParams[prop] : token; })
    .join('/');
};

/**
 * Construct rest api end point with path params updated
 * @param {String} path contains url with our without path params 
 * @param {Object} pathParams contains pathParams
 */
export function constructRestApiEndPoint(path, pathParams) {
  let url = path;
  if (pathParams) {
    url = replacePathParamPlaceholder(url, pathParams);
  }
  return new URL(url);
}

/**
 * 
 * @param {URL} url Url object
 * @param {*} queryParams 
 */
export function appendQueryParamsToUrl(url, queryParams = {}) {
  const keys = Object.keys(queryParams);
  let urlWithQueryParams = url;
  if (keys.length > 0) {
    keys.forEach((key) =>
      urlWithQueryParams.searchParams.append(key, queryParams[key])
    );
  }
  return urlWithQueryParams;
}

export const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};