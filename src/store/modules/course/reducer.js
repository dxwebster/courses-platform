const INITIAL_STATE = {
  activeModule: { },
  activeLesson: { },
  modules: [],
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MODULES': {
      return {
        ...state,
        modules: action.modules,

      };
    }
    case 'OPEN_MODULE': {
      return {
        ...state,
        modules: action.modules,
      };
    }
    case 'TOGGLE_LESSON': {
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    }

    default:
      return state;
  }
}
