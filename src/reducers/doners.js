import * as types from '../actions/ActionTypes';

const INITIAL_STATE = { sites: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_SITES:
      return { ...state, sites: action.sites };
    default:
      return state;
  }
}
