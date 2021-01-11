import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { openModule, selectLesson } from '../../../../store/modules/course/actions'; 
import { Container } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);
  // const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleOpenModule(moduleIndex) {
    setIsOpen(!isOpen);
    // dispatch(openModule(modules[moduleIndex]));
  }

  function handleSelectLesson(module, lessonIndex) {
    setIsActive(!isActive);
    // dispatch(selectLesson(module, modules.lessons[lessonIndex]));
  }

  return (
    <Container isOpen={isOpen}>
      {modules.map((module, moduleIndex) => (
        <section key={module.id} >
          <div onClick={() => handleOpenModule(moduleIndex)}>
            <h3>{module.title}</h3>
            <span>{module.quantity} aulas </span>
          </div>

          <ul isActive={isActive}>
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id} id={lesson.id} onClick={() => handleSelectLesson(module, lessonIndex)} >
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
