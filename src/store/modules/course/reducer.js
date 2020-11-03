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
      return {
        ...state,
        modules: action.payload, // preenche o valor de modules com a resposta da api
      };
    }

    case 'TOGGLE_LESSON': {
      return {
        ...state, 
        activeLesson: action.lesson, // sobrepõe o valor da activeLesson com a lesson atual
        activeModule: action.module, // sobrepõe o valor do activeModule com o module atual
      };
    }

    case 'OPEN_MODULE': {
      return {
        ...state,
        open: action.open, // sobrepõe valor da open com true ou false
      };
    }

    default:
      return state;
  }
}

// evitar colocar lógica
