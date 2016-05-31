import * as types from './ActionTypes';
import fetch from '../core/fetch';
import ReactDOM from 'react-dom';
import React from 'react';

export function fetchDoners() {
  return (dispatch) => {
    return fetch(`http://localhost:9000`)
      .then(response => response.json())
      .then(json => dispatch({
        type: types.FETCH_DONERS,
        archives: json,
      }));
  };
}
