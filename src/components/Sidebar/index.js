import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModule, selectLesson } from '../../store/modules/course/actions';
import { Container } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const handleOpenModule = (moduleIndex) => {
    modules[moduleIndex].open = !modules[moduleIndex].open;
    dispatch(openModule(modules[moduleIndex]));
  };

  const handleSelectLesson = (module, lessonIndex) => {
    modules.lessons[lessonIndex].active = !modules.lessons[lessonIndex].active;
    dispatch(selectLesson(module, modules.lessons[lessonIndex]));
  };

  return (
    <Container>
      {modules.map((module, moduleIndex) => (
        <section className={module.open ? 'open' : ''} key={module.id}>
          <div onClick={() => handleOpenModule(moduleIndex)} aria-hidden="true">
            <h3>{module.title}</h3>
            <span>{module.quantity} aulas </span>
          </div>

          <ul>
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id} id={lesson.id} className={lesson.active ? 'active' : ''} onClick={() => handleSelectLesson(module, lessonIndex)} aria-hidden="true">
                {lesson.id}. {lesson.title}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Container>
  );
}

export default Sidebar;
