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

  return (
    <Container>
      <CourseItem>
        <Link to="/course" onClick={() => dispatch(modulesRequest(true))}>
          <img src={course01} alt="" />
          <div className="title-box">
            <h2>Curso de Java Script</h2>
            <p>Aprenda a fazer sites e sistemas web Java Script</p>
          </div>
          <div className="footer-box">
            <span className="author">Progresso 50%</span>
          </div>
        </Link>
      </CourseItem>

      <CourseItem>
        <img src={course02} alt="" />
        <div className="title-box">
          <h2>Curso de Java Script</h2>
          <p>Aprenda a fazer sites e sistemas web Java Script</p>
        </div>
        <div className="footer-box">
          <span className="author">Progresso 50%</span>
        </div>
      </CourseItem>

      <CourseItem>
        <img src={course03} alt="" />
        <div className="title-box">
          <h2>Curso de Java Script</h2>
          <p>Aprenda a fazer sites e sistemas web Java Script</p>
        </div>
        <div className="footer-box">
          <span className="author">Progresso 50%</span>
        </div>
      </CourseItem>
    </Container>
  );
}
