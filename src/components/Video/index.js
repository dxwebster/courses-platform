import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (
  <Container>
    <div>
      <h1>{activeModule.title}</h1>
      <h3>{activeLesson.title}</h3>
    </div>

    <span>Vídeo: {activeLesson.video}</span>
  </Container>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
