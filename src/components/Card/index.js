import React, { useEffect } from 'react';

import { Container } from './styles';

import Video from '../Video';
import Sidebar from '../Sidebar';

import { useDispatch } from 'react-redux';
import { setModules } from '../../store/modules/course/actions';

import api from '../../services/api';


const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/modules');

      dispatch(setModules(data));

    }

    getData();
  }, [])

  return (
    <Container>
      <Video />
      <Sidebar />
    </Container>
  );
};

export default Card;
