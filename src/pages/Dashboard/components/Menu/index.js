import React from 'react';

import { Container, MenuSide, Avatar } from './styles';
import { Link } from 'react-router-dom';

import SvgArrowBack from '../../../../assets/SvgArrowBack';
import SvgNotification from '../../../../assets/SvgNotification';
import SvgMessage from '../../../../assets/SvgMessage';

import logoImg from '../../../../assets/logo.svg';
import avatarImg from '../../../../assets/avatar.png';

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/login">
            <SvgArrowBack />
            <span>Voltar</span>
          </Link>
        </li>
        <li>
          <img src={logoImg} alt="logo" />
        </li>
      </ul>

      <MenuSide>
        <ul>
          <li>
            <SvgNotification />
          </li>
          <li>
            <SvgMessage />
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
