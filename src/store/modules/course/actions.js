import {
  TYPE_COURSE_MODULES_REQUEST,
  TYPE_COURSE_MODULES_SUCCESS,
  TYPE_COURSE_MODULES_FAILURE, 
  TYPE_COURSE_SELECT_LESSON, 
  TYPE_COURSE_COLLAPSE_SIDEBAR
} from '../../../constants/types-reducers'

export function modulesRequest(boolean) {
  return {
    type: TYPE_COURSE_MODULES_REQUEST,
    payload: boolean,
  };
}
export function modulesSuccess(modules) {
  return {
    type: TYPE_COURSE_MODULES_SUCCESS,
    payload: modules,
  };
}
export function modulesFailure(modules) {
  return {
    type: TYPE_COURSE_MODULES_FAILURE,
    payload: modules ,
  };
}


export function selectLesson(activeModule, activeLesson) {
  return {
    type: TYPE_COURSE_SELECT_LESSON,
    payload: { activeModule, activeLesson },
  };
}

export function setCollapseSidebar(collapseSidebar) {
  return {
    type: TYPE_COURSE_COLLAPSE_SIDEBAR,
    payload: { collapseSidebar },
  };
}
