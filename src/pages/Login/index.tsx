/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useContext } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { signInRequest } from '../../store/modules/auth/actions';
import { Container, Content, AnimationContainer, Button } from './styles';
import Input from '../../components/Input';
import { ToastContext } from '../../providers/ToastProvider';

interface FormData {
  user: string;
  senha: string;
}

export default function Login() {
  const { credencialError, userLogged } = useSelector((state: RootStateOrAny) => state.auth);
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // exemplo com hook useContext nativo do react
  const { addToast } = useContext(ToastContext);

  const yupError = (err: any) => {
    const validationErrors = {};

    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);
    }
  };

  const validForm = async () => {
    try {
      formRef.current?.setErrors({});

      const data = formRef?.current?.getData();

      const schema = Yup.object().shape({
        user: Yup.string().required('user obrigatório'),
        senha: Yup.string().required('senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      return true;
    } catch (err) {
      yupError(err);
      return false;
    }
  };

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    const formIsValid = await validForm();

    if (formIsValid) {
      const { user, senha } = data;
      dispatch(signInRequest(user, senha));
    }
  };

  useEffect(() => {
    if (credencialError !== '') {
      addToast({
        type: 'error',
        title: 'Erro na Autenticação',
        description: ' Credenciais inválidas',
      });
    }
  }, [credencialError]);

  useEffect(() => {
    if (userLogged) navigate('../dashboard', { replace: true });
  }, [userLogged]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3>CodeReview</h3>
          <h5>aprenda online</h5>

          <Form ref={formRef} onSubmit={handleSubmit} onChange={validForm}>
            <Input placeholder="Digite seu user" name="user" type="text" />
            <Input placeholder="Digite sua senha" name="senha" type="password" />

            <Button type="submit" value="Acessar">
              Acessar
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
            <Link to="/signup">Criar conta</Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
