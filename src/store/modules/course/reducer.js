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

        activeModule: action.modules[0],
        activeLesson: action.modules[0].lessons[0],
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
        activeModule: action.module,
        activeLesson: action.lesson,
      };
    }

    default:
      return state;
  }
}
