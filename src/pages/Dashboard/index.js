import React from 'react';

import Menu from '../../components/Menu';
import CourseList from './components/CourseList';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Menu />
      <CourseList />
    </Container>
  );
}
