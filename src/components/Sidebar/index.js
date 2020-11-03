import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/modules/course/actions';

import { Container } from './styles';

function Sidebar() {
  const { modules } = useSelector(state => state.course);

  const dispatch = useDispatch()

  // action.modules.map((module, moduleIndex) => {
  //   if (moduleIndex === action.index) {
  //     module.open = !module.open;

  //     console.log(action.open);
  //   } else {
  //     module.open = false;
  //   }


  return (
    <Container>
      {modules.map((module, index) => (
        <div className={'module ' + (module.open ? 'open' : '')} key={module.id}>
          <h3 className="module-title" onClick={() => dispatch(CourseActions.openModule(module.open, index, modules))}>
            {module.title}
            <span>{module.quantity} aulas </span>
          </h3>

          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id} onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}

export default Sidebar;
