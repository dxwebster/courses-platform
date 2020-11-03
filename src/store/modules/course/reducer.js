import api from '../../../services/api';

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: '1. Iniciando com React',
      lessons: [
        { id: 1, title: 'Introdução ao  React', video: '1' },
        { id: 2, title: 'Inspecionando o Código', video: '2' },
        { id: 3, title: 'Criando Components', video: '3' },
      ],
      quantity: 3,
      open: true,
    },
    {
      id: 2,
      title: '2. Aprendendo Redux',
      lessons: [
        { id: 4, title: 'Porque utilizar Redux?', video: '4' },
        { id: 5, title: 'Actions, Reducers e Store', video: '5' },
      ],
      quantity: 2,
      open: true,
    },
  ],
};

// Essa função course é um reducer, que:
// 1. Armazena o estado inicial
// 2. Verifica qual action foi disparada
// 3. Retorna o estado modificado/manipulado

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LESSON': {
      async function getData() {
        const { data } = await api.get('/modules');
        console.log(data);
      }
      getData();

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
    }

    default:
      return state;
  }
}
