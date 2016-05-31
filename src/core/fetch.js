import fetch from 'isomorphic-fetch';
import Const from '../core/constants';
import { Promise } from 'es6-promise';

export default function (endpoint, options = {}) {

  const token = '';

  if (!token) {
    return Promise.reject('Authorization token is not defined!');
  }

  if (!options.headers) {
    options.headers = {};
  }

  options.headers.Authorization = `Bearer ${token}`;

  return fetch(endpoint, options);
}
