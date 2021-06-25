import React from 'react';
import { takeLatest, all} from 'redux-saga/effects';

import { modulesSuccess, modulesFailure} from './actions';

import { TYPE_COURSE_MODULES_REQUEST } from '../../../constants/types-reducers'

export function* getModules({ payload }) { 
  try {
    const { courseId } = payload;
    const url = `course/modules/${courseId}`;
    const { data } = yield call(api.get, url, configs);

    if (!data.success) throw data;

    yield modulesSuccess(data);
    
  } catch (err) {
    const error = err.result ? err.result : { message: 'Erro ao buscar avisos' };

    yield put(modulesFailure(error));
  }
}

export default all([
  takeLatest(TYPE_COURSE_MODULES_REQUEST, getModules),
]);
