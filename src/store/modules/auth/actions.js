import {
  TYPE_AUTH_LOGIN_SUCCESS
} from '../../../constants/types-reducers'

export function setLogin(boolean) {
  return {
    type: TYPE_AUTH_LOGIN_SUCCESS,
    payload: boolean,
  };
}
