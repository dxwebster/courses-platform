import api from '../../../services/api';

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [],
};

// Essa função course é um reducer, que:
// 1. Armazena o estado inicial
// 2. Verifica qual action foi disparada
// 3. Retorna o estado modificado/manipulado

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MODULES': {
      console.log(action)
      return {
        ...state,
        modules: action.payload,
      }
    }
    case 'TOGGLE_LESSON': {
      

      return {
        ...state, // pega o estado que já existe
        activeLesson: action.lesson, // sobrepõe o valor da activeLesson com a lesson atual
        activeModule: action.module, // sobrepõe o valor do activeModule com o module atual
      };
    }
    case 'OPEN_MODULE': {
      action.modules.map((module, moduleIndex) => {
        if (moduleIndex === action.index) {
          module.open = !module.open;

          console.log(action.open);
        } else {
          module.open = false;
        }
        return {
          ...state,
          open: action.open,
        };
      });

      // return {
      //   ...state,
      //   modules[action.index]: action.boolean
      // }
    }

    default:
      return state;
  }
}
