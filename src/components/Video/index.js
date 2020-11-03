import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

function Video() {
  const { activeModule, activeLesson } = useSelector((state) => state.course); // pega o modules do estado 'course'

  return (
    <Container>
      <div>
        <h1>{activeModule.title}</h1>
        <h3>{activeLesson.title}</h3>
      </div>

      <span>Vídeo: {activeLesson.video}</span>
    </Container>
  );
}

export default Video;
