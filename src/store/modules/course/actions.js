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

export function setCollapseSidebar(collapseSidebar) {
  return {
    type: 'COLLAPSE_SIDEBAR',
    payload: { collapseSidebar },
  };
}
