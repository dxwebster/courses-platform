export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}
export function openModule(modules) {
  return {
    type: 'OPEN_MODULE',
    modules,
  };
}

export function setModules(modules) {
  return {
    type: 'SET_MODULES',
    payload: modules,
  }
}
