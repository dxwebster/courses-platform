export function setModules(modules){
  return{
    type: 'SET_MODULES',
    modules,
  }
}
export function openModule(modules) {
  return {
    type: 'OPEN_MODULE',
    modules,
  };
}

export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson
  }
}

