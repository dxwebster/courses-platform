import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLesson,
} from '../../../../store/modules/course/actions';
import { Container, ModuleList, LessonList, Lesson, ButtonSection, ModuleSection } from './styles';

function Sidebar() {
  const { modules } = useSelector((state) => state.course);
  const [clickedModule, setClickedModule] = useState(null);
  const [clickedLesson, setClickedLesson] = useState(null);
  const [closeSidebar, setCloseSidebar] = useState(false);

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
        <Container isClosed={closeSidebar}>
          
          <ButtonSection isClosed={closeSidebar}>
            <button onClick={() => setCloseSidebar(!closeSidebar)} />
          </ButtonSection>
         
          <ModuleSection isClosed={closeSidebar}>
            {modules.map((module, moduleIndex) => (
              <ModuleList key={moduleIndex} isOpen={moduleIndex === clickedModule}>
                <div onClick={() => handleOpenModule(module, moduleIndex)}>
                  <h3>{module.title}</h3>
                  <span>{module.quantity} aulas</span>
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
              </ModuleList>
            ))}
          </ModuleSection>
          
         
        </Container>
      )}
    </>
  );
}

export default Sidebar;
