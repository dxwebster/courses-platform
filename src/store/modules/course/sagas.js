import React from 'react';
import { takeLatest, all, put, call} from 'redux-saga/effects';

import { modulesSuccess, modulesFailure} from './actions';

import { TYPE_COURSE_MODULES_REQUEST } from '../../../constants/types-reducers'
import api from '../../../services/api';

export function* getModules({ payload }) { 
  const { courseId } = payload;

  try {
    const url = `course/modules/${courseId}`;
    const { data } = yield call(api.get, url, null);

    yield modulesSuccess(data);
    console.log(data)
    
  } catch (err) {
    const error = err.result ? err.result : { message: `Erro ao buscar módulos do curso selecionado.` };

    yield put(modulesFailure(error));
    alert(error.message)
    
  }
}

export default all([
  takeLatest(TYPE_COURSE_MODULES_REQUEST, getModules),
]);
