import produce from 'immer';

import {
  TYPE_COURSE_MODULES_SUCCESS,
  TYPE_COURSE_SELECT_LESSON,
  TYPE_COURSE_COLLAPSE_SIDEBAR
} from '../../../constants/types-reducers';

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: null,
  collapseSidebar: false,
};

export function course(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPE_COURSE_MODULES_SUCCESS: {
        draft.modules = action.payload;
        draft.activeModule = action.payload.modules[0];
        draft.activeLesson = action.payload.modules[0].lessons[0];
        break;
      }

      case TYPE_COURSE_SELECT_LESSON : {
        draft.activeModule = action.payload.activeModule;
        draft.activeLesson = action.payload.activeLesson;
          break;
      }

      case TYPE_COURSE_COLLAPSE_SIDEBAR : {
        draft.collapseSidebar = action.payload.collapseSidebar;
          break;
      }
      default:
        break;
    }
  });
}
