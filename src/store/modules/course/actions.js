export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}
export function openModule(open, index, modules) {
  return {
    type: 'OPEN_MODULE',
    open,
    index,
    modules,
  };
}

export function setModules(modules) {
  return {
    type: 'SET_MODULES',
    payload: modules,
  }
}
