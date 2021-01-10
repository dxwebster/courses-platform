import React from 'react';

import { Container, MenuSide, Avatar } from './styles';
import { Link } from 'react-router-dom';

import arrowImg from '../../../../assets/arrow.svg';
import noticeImg from '../../../../assets/notification.svg';
import messagesImg from '../../../../assets/message.svg';
import logoImg from '../../../../assets/logo.svg';
import avatarImg from '../../../../assets/avatar.png';

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/login">
            <img src={arrowImg} alt="Home" />
            Voltar
          </Link>
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
    </Container>
  );
}
