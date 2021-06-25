import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, CourseItem } from './styles';
import course01 from '../../../../assets/01.jpg';
import course02 from '../../../../assets/02.jpg';
import course03 from '../../../../assets/03.jpg';

import { modulesRequest } from '../../../../store/modules/course/actions';

export default function CourseList() {
  const dispatch = useDispatch();

  const courses = [
    {
      id: 1,
      title: 'Curso de Java Script',
      description: 'Aprenda a fazer sites e sistemas web Java Script',
      progress: 'Progresso 78%',
      img: course01,
    },
    {
      id: 2,
      title: 'Curso de NodeJS',
      description: 'Aprenda a fazer sites e sistemas web Java Script',
      progress: 'Progresso 35%',
      img: course02,
    },
    {
      id: 3,
      title: 'Curso de ReactJS',
      description: 'Aprenda a fazer sites e sistemas web Java Script',
      progress: 'Progresso 5%',
      img: course03,
    },
  ];

  return (
    <Container>
      {courses &&
        courses.map((course: any) => (
          <CourseItem id={course.id}>
            <Link to="/course" onClick={() => dispatch(modulesRequest(course.id))}>
              <img src={course.img} alt="course-img" />
              <div className="title-box">
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              <div className="footer-box">
                <span className="author">{course.progress}</span>
              </div>
            </Link>
          </CourseItem>
        ))}
    </Container>
  );
}
