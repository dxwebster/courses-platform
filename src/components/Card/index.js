import React from 'react';

import { Container } from './styles';

import Video from '../Video';
import Sidebar from '../Sidebar';

const Card = () => {
  return (
    <Container>
      <Video />
      <Sidebar />
    </Container>
  );
};

export default Card;
