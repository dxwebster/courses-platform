import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Content,
  AnimationContainer,
  Input,
  Button,
} from './styles';

export default function Signin() {
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </form>

          <Link to="/signup">
            <FiLogIn /> Criar conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
