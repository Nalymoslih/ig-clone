import {legacy_createStore} from 'redux';

const tokenReducer = (state = {token: null}, action) => {
  switch (action.type) {
    case 'setToken':
      return {token: action.payload};
    case 'clearToken':
      return {token: null};
    default:
      return state;
  }
};

export const Store = legacy_createStore(tokenReducer);
