import React from 'react';

import { Container, Menu, MenuSide, Avatar } from './styles';

import Card from './components/Card';
import arrowImg from '../../assets/arrow.svg';
import noticeImg from '../../assets/notification.svg';
import messagesImg from '../../assets/message.svg';
import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.png';

function Login() {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <img src={arrowImg} alt="Home" />
            Voltar
          </li>
          <li>
            <img src={logoImg} alt="logo" />
          </li>
        </ul>

        <MenuSide>
          <ul>
            <li>
              <img src={noticeImg} alt="Notifications" />
            </li>
            <li>
              <img src={messagesImg} alt="Messages" />
            </li>
          </ul>

          <main>
            <p>Adriana Shikasho</p>
            <Avatar src={avatarImg} alt="Avatar" />
          </main>
        </MenuSide>
      </Menu>
      <Card />
    </Container>
  );
}

export default Login;
