import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import { Container, Card } from './styles';
import Menu from './components/Menu';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import { loadModules } from '../../store/modules/course/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get('/modules');
        dispatch(loadModules(data));
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

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
