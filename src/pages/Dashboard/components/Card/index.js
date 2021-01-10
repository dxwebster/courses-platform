import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './styles';

import Video from '../Video';
import Sidebar from '../Sidebar';

import { loadModules } from '../../../../store/modules/course/actions';

import api from '../../../../services/api';

const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/modules');

      dispatch(loadModules(data));
    }

    getData();
  }, [dispatch]);

  return (
    <Container>
      <Video />
      <Sidebar />
    </Container>
  );
};

export default Card;
