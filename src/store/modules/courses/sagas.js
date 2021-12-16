import { takeLatest, all, put, call} from 'redux-saga/effects';
import api from '../../../services/api';
import { coursesSuccess, coursesFailure, modulesSuccess, modulesFailure } from './actions';
import {
  TYPE_COURSES_REQUEST,
  TYPE_COURSES_MODULES_REQUEST
} from '../../../constants/types-reducers'

export function* getCourses({ payload }) { 
  try {
    const { userId } = payload;

    const url = 'courses/';
    const configs = {
      params: {
        userId,
      },
    };

    const { data } = yield call(api.get, url, configs);

    yield put(coursesSuccess(data));
    
  } catch (err) {
    const error = err.result ? err.result : { message: `Erro ao buscar cursos.` };

    yield put(coursesFailure(error));
    alert(error.message)
    
  }
}

export function* getModules({ payload }) { 
  const { courseId } = payload;

  try {
    const url = `courses/modules/${courseId}`;
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
  takeLatest(TYPE_COURSES_REQUEST, getCourses),
  takeLatest(TYPE_COURSES_MODULES_REQUEST, getModules),
]);
