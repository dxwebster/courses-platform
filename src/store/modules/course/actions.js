import {
  TYPE_COURSE_MODULES_REQUEST,
  TYPE_COURSE_MODULES_SUCCESS,
  TYPE_COURSE_MODULES_FAILURE, 
  TYPE_COURSE_SELECT_LESSON, 
  TYPE_COURSE_COLLAPSE_SIDEBAR
} from '../../../constants/types-reducers'

export function modulesRequest(courseId) {
  return {
    type: TYPE_COURSE_MODULES_REQUEST,
    payload: courseId,
  };
}
export function modulesSuccess(modules) {
  return {
    type: TYPE_COURSE_MODULES_SUCCESS,
    payload: modules,
  };
}
export function modulesFailure(error) {
  return {
    type: TYPE_COURSE_MODULES_FAILURE,
    payload: error ,
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
