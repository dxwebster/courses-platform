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

  const dispatch = useDispatch();

  function handleOpenModule(module, moduleIndex) {
    console.log(moduleIndex);
    if (moduleIndex === clickedModule) {
      setClickedModule(null);
    } else {
      setClickedModule(moduleIndex);
    }
  }

  function handleSelectLesson(module, lesson) {
    if (lesson.id === clickedLesson) {
      setClickedLesson(null);
    } else {
      setClickedLesson(lesson.id);
    }

    dispatch(selectLesson(module, lesson));
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
                    key={lessonIndex}
                    id={lesson.id}
                    onClick={() => handleSelectLesson(module, lesson)}
                    isActive={lesson.id === clickedLesson}
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
