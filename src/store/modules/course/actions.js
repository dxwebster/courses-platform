export function loadModules(modules) {
  return {
    type: 'LOAD_MODULES',
    payload:  { modules }
  };
}
export function openModule(modules) {
  return {
    type: 'OPEN_MODULE',
    payload: { modules }
  };
}

export function selectLesson(module, lesson) {
  return {
    type: 'SELECT_LESSON',
    payload: { module, lesson }
  };
}
