import { takeLatest, put, call, all } from 'redux-saga/effects';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

import { TYPE_AUTH_SIGN_IN_REQUEST } from '../../../constants/types-reducers'

export function* signIn({ payload }) {
  try {
    const { user, senha } = payload;
    const url = '/auth';
    const body = { user, senha };

    const { data } = yield call(api.post, url, body);

    if (!data.success) throw data;

    yield put(signInSuccess(user, senha));
    history.push('/inicio');
    
  } catch (err) {
    const error = { message: 'Usuário ou Senha inválidos' };
    yield put(signFailure(error));
    console.log('Credenciais inválidas')
  }
}

export default all([
  takeLatest(TYPE_AUTH_SIGN_IN_REQUEST, signIn),
]);
