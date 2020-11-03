import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

import Video from '../Video';
import Sidebar from '../Sidebar';

import { setModules } from '../../store/modules/course/actions';
import api from '../../services/api';

const Card = () => {
  const dispatch = useDispatch(); // Hook do react-redux para disparar uma ação

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/modules');

      dispatch(setModules(data)); // disparo a ação setModules e envio a resposta da api
    }
    getData();
  }, []);

  return (
    <Container>
      <Video />
      <Sidebar />
    </Container>
  );
};

export default Card;
