import {
  TYPE_AUTH_LOGIN_SUCCESS
} from '../../../constants/types-reducers'

export function setLogin(boolean) {
  return {
    type: TYPE_AUTH_LOGIN_SUCCESS,
    payload: boolean,
  };
}

export function signInRequest(user, senha) {
  return {
    type: 'TYPE_AUTH_SIGN_IN_REQUEST',
    payload: { user, senha },
  };
}

export function signInSuccess(data) {
  return {
    type: 'TYPE_AUTH_SIGN_IN_SUCCESS',
    payload: data,
  };
}

export function signFailure(error) {
  return {
    type: 'TYPE_AUTH_SIGN_FAILURE',
    payload: error,
  };
}

export function signOut() {
  return {
    type: 'TYPE_AUTH_SIGN_OUT',
  };
}
