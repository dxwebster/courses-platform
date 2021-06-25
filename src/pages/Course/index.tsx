import React from 'react';

import { Container, Card } from './styles';
import Menu from '../../components/Menu';
import Video from './components/Video';
import Sidebar from './components/Sidebar';

export default function Course() {
  return (
    <Container>
      <Menu />
      <Card>
        <Video />
        <Sidebar />
      </Card>
    </Container>
  );
}
