import { all } from 'redux-saga/effects';

import course from './course/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    course,
    auth
  ]);
}
