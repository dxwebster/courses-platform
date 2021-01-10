import React from 'react';

import { Container } from './styles';

import Card from './components/Card';
import Menu from './components/Menu';

function Login() {
  return (
    <Container>
      <Menu />
      <Card />
    </Container>
  );
}

export default Login;
