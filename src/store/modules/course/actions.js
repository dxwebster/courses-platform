export function loadModules(modules, lesson) {
  return {
    type: 'LOAD_MODULES',
    modules,
    lesson,
  };
}
export function openModule(modules) {
  return {
    type: 'OPEN_MODULE',
    modules,
  };
}

export function selectLesson(module, lesson) {
  return {
    type: 'SELECT_LESSON',
    module,
    lesson,
  };
}
