import React from 'react';

import { Container, Card } from './styles';
import Header from '../../components/Header';
import Video from '../../components/Video';
import Sidebar from '../../components/Sidebar';

export default function Course() {
  return (
    <Container>
      <Header />
      <Card>
        <Video />
        <Sidebar />
      </Card>
    </Container>
  );
}
