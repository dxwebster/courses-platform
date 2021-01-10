import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadModules } from '../../store/modules/course/actions';
import api from '../../services/api';

import { Container, Card } from './styles';
import Menu from './components/Menu';
import Video from './components/Video';
import Sidebar from './components/Sidebar';

export default function Dashboard() {
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
      <Menu />
      <Card>
        <Video />
        <Sidebar />
      </Card>
    </Container>
  );
}
