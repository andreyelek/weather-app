import { combineReducers } from "redux";
import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
} from "../actions";
import { createAction, createReducer } from 'redux-act';

export const setActive = createAction();


const elements = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WEATHER:
      return action.data;
    default:
      return state;
  }
};
const isFetching = (state = true, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return true;
    case RECEIVE_WEATHER:
      return false;
    default:
      return state;
  }
};

const activeElement = createReducer({
  [setActive]: (state, payload) => payload
}, 0);


const rootReducer = combineReducers({
  elements,
  isFetching,
  activeElement
});

export default rootReducer;
