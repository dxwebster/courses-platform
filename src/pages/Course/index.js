import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api';

import { Container, Card } from './styles';
import Menu from '../../components/Menu';
import Video from './components/Video';
import Sidebar from './components/Sidebar';
import { loadModules } from '../../store/modules/course/actions';

export default function Course() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      const { data } = api.get('/modules');
      dispatch(loadModules(data));
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
