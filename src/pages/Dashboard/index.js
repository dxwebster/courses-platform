import React from 'react';

import Header from '../../components/Header';
import CourseList from './components/CourseList';
import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <CourseList />
    </Container>
  );
}
