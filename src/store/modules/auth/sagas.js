import { takeLatest, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';


export function* signIn({ payload }) {
  try {
    const { user, senha } = payload;

    if (user === 'adriana' && senha === '123'){
      yield put(signInSuccess(user, senha));
      history.push('/inicio');

    }
  } catch (err) {
    const error = { message: 'Usuário ou Senha inválidos' };
    yield put(signFailure(error));
    console.log(error)
  }
}


export default all([
  takeLatest('TYPE_AUTH_SIGN_IN_REQUEST', signIn),
]);
