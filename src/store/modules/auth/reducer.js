import produce from 'immer';

import {
  TYPE_AUTH_LOGIN_SUCCESS
} from '../../../constants/types-reducers';

export const INITIAL_STATE = {
  logged: false
};

export function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      
      case TYPE_AUTH_LOGIN_SUCCESS: {
        draft.logged = action.payload;
        break;
      }

      default:
    }
  });
}
