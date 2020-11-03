import React from 'react';

import { useSelector } from 'react-redux';

import { Container } from './styles';

function Video() {
  const { activeModule, activeLesson } = useSelector((state) => state.course);

  return (
    <Container>
      <div>
        <h1>{activeModule.title}</h1>
        <h3>{activeLesson.title}</h3>
      </div>

      <iframe  src={activeLesson.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Container>
  );
}

export default Video;
