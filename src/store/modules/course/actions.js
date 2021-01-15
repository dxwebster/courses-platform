export function loadModules(modules) {
  return {
    type: 'LOAD_MODULES',
    payload: { modules },
  };
}

export function selectLesson(activeModule, activeLesson) {
  return {
    type: 'SELECT_LESSON',
    payload: { activeModule, activeLesson },
  };
}
