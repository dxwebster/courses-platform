/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '../../store/modules/auth/actions';
import { Container, Content, AnimationContainer, Button } from './styles';
import Input from '../../components/Input';

import { useToast } from '../../hooks/toast';

interface FormData {
  user: string;
  senha: string;
}

export default function Login() {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const { addToast } = useToast();

  const yupError = (err: any) => {
    const validationErrors = {};

    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);
    }
  };

  const toastError = () => {
    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Ocorreu um  erro ao fazer login, cheque as credenciais',
    });
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
      toastError();
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

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit} onChange={validForm}>
            <Input placeholder="Digite seu user" name="user" type="text" />
            <Input placeholder="Digite sua senha" name="senha" type="password" />

            <Button type="submit" value="Acessar">
              Acessar
            </Button>
          </Form>

          <Link to="/forgot-password">Esqueci minha senha</Link>

          <Link to="/signup">Criar conta</Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
}
