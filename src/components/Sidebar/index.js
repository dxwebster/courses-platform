import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModule, toggleLesson } from '../../store/modules/course/actions';
import { Container } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const handleOpenModule = (moduleIndex) => {

    const newModule = (modules.map((newModule, newModuleIndex) => {
      if (newModuleIndex === moduleIndex) {
        newModule.open = !newModule.open
      } else {
        newModule.open = false
      }
      return newModule;
    }))

    dispatch(openModule(newModule));
  };

  const handleToggleLesson = (module, lesson, lessonIndex) => {

    module.lessons.map((newLesson, newLessonIndex) => {
      if (newLessonIndex === lessonIndex) {
        newLesson.active = !newLesson.active
      } else {
        newLesson.active = false
      }
      return newLesson;
    })

    dispatch(toggleLesson(module, lesson));
  };

  return (
    <Container>
      {modules.map((module, moduleIndex) => (
        
        <section className={module.open ? 'open' : ''} key={module.id}>
          
          <div onClick={() => handleOpenModule(moduleIndex)}>
            <h3>{module.title}</h3>
            <span>{module.quantity} aulas </span>
          </div>

          <ul>
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id} id={lesson.id} className={lesson.active ? 'active' : ''} onClick={() => handleToggleLesson(module, lesson, lessonIndex)}>
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
