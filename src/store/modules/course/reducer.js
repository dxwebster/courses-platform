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
        modules: action.payload,
        activeModule: action.payload[0],
        activeLesson: action.payload,
      };
    }

    case 'TOGGLE_LESSON': {
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      };
    }
    case 'OPEN_MODULE': {
      return {
        ...state,
        modules: action.modules,
      };
    }

    default:
      return state;
  }
}
