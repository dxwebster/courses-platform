import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import CourseList from '../../components/CourseList';
import Header from '../../components/Header';
import { Container, Main, Top } from './styles';

export default function Dashboard() {
  const { name } = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <Container>
      <Header />
      <Main>
        <Top>
          <h2>Olá, {name}</h2>
          <p>
            É bom ter você de volta! <br />
            Continue aprendendo, retorne para a aula que parou.
          </p>
        </Top>

        <CourseList />
      </Main>
    </Container>
  );
}
