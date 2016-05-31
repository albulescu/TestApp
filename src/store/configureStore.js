import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

/**
 * Generate store instance
 * @param initialState
 * @returns {*}
 */
const reducer = combineReducers(reducers);
export default function (initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
}
