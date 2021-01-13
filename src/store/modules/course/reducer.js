const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [],
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_MODULES': {
      return {
        ...state,
        modules: action.payload.modules,
        activeModule: action.payload.modules[0],
        activeLesson: action.payload.modules[0].lessons[0],
      };
    }
    case 'SELECT_LESSON': {
      return {
        ...state,
        activeModule: action.payload.activeModule,
        activeLesson: action.payload.activeLesson,
      };
    }

    default:
      return state;
  }
}
