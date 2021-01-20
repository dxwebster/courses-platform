import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CourseItem } from './styles';
import course01 from '../../../../assets/01.jpg';
import course02 from '../../../../assets/02.jpg';
import course03 from '../../../../assets/03.jpg';

export default function CourseList() {
  return (
    <Container>

      <CourseItem>
        <Link to="/course">
            <img src={course01} alt=""/>
            <div className="title-box">
              <h2>Curso de Java Script</h2>
              <p>Aprenda a fazer sites e sistemas web Java Script</p>
            </div>
            <div className="footer-box">
              <span className="author">Progresso 50%</span>
          </div>
          </ Link>
      </CourseItem>
        
      <CourseItem>
        <img src={course02} alt=""/>
        <div className="title-box">
          <h2>Curso de Java Script</h2>
          <p>Aprenda a fazer sites e sistemas web Java Script</p>
        </div>
        <div className="footer-box">
          <span className="author">Progresso 50%</span>
        </div>
      </CourseItem>

      <CourseItem>
        <img src={course03} alt=""/>
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
