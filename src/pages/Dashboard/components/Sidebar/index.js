import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  openModule,
  selectLesson,
} from '../../../../store/modules/course/actions';
import { Container, ModuleSection, LessonList, Lesson } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);
  const [clickedModule, setClickedModule] = useState(null);
  const [clickedLesson, setClickedLesson] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  function handleOpenModule(module, moduleIndex) {
    console.log(moduleIndex);
    if (moduleIndex === clickedModule) {
      setClickedModule(null);
    } else {
      setClickedModule(moduleIndex);
    }
    // dispatch(openModule(modules[moduleIndex]));
  }

  function handleSelectLesson(module, lessonIndex) {
    if (lessonIndex === clickedLesson) {
      setClickedLesson(null);
    } else {
      setClickedLesson(lessonIndex);
    }

    // dispatch(selectLesson(module, modules.lessons[lessonIndex]));
  }

  return (
    <>
      {modules.length && (
        <Container>
          {modules.map((module, moduleIndex) => (
            <ModuleSection key={moduleIndex}>
              <div onClick={() => handleOpenModule(module, moduleIndex)}>
                <h3>{module.title}</h3>
                <span>{module.quantity} aulas </span>
              </div>

              <LessonList isOpen={moduleIndex === clickedModule}>
                {module.lessons.map((lesson, lessonIndex) => (
                  <Lesson
                    key={lesson.id}
                    id={lesson.id}
                    onClick={() => handleSelectLesson(module, lessonIndex)}
                    isActive={lessonIndex === clickedLesson}
                  >
                    {lesson.id}. {lesson.title}
                  </Lesson>
                ))}
              </LessonList>
            </ModuleSection>
          ))}
        </Container>
      )}
    </>
  );
}

export default Sidebar;
