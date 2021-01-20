import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuRight, MenuLeft, Avatar, TooltipMenu } from './styles';

import SvgArrowBack from '../../assets/SvgArrowBack';
import SvgNotification from '../../assets/SvgNotification';
import SvgMessage from '../../assets/SvgMessage';
import SvgProfile from '../../assets/SvgProfile';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.png';

export default function Menu() {

  const [fixed, setFixed] = useState(null);

  return (
    <>
      <Container>
        <MenuLeft>
          <ul>
            <li>
              <Link to="/dashboard">
                <SvgArrowBack />
                <span>Voltar</span>
              </Link>
            </li>
            <li>
              <img src={logoImg} alt="logo" />
            </li>
          </ul>
        </MenuLeft>

        <MenuRight>
          <ul>
            <li>
              <SvgNotification />
            </li>
            <li>
              <SvgMessage />
            </li>
          </ul>

          <main onClick={() => { setFixed(!fixed) }}>
            <p>Adriana Shikasho</p>
            <Avatar src={avatarImg} alt="Avatar"/>
          </main>
        </MenuRight>
  
        <TooltipMenu fixed={fixed}>
          <ul>
            <li><SvgProfile /> Meu perfil</li>
            <li><SvgProfile /> Meus cursos</li>
            <li><SvgProfile /> Configurações</li>
            <li><SvgProfile /> Sair</li>
          </ul>
        </TooltipMenu>
      </Container>
    </>
  );
}
