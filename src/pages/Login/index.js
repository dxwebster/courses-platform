import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import history from '../../services/history';

import { setLogin } from '../../store/modules/auth/actions';

import {
  Container,
  Content,
  AnimationContainer,
  Input,
  Button,
} from './styles';

export default function Signin() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    history.push('/dashboard');
    dispatch(setLogin(true))
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
