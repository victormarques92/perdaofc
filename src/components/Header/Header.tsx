import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { logo } from '../../assets';
import {
  Branch,
  Button,
  Container,
  Main,
  Nav,
  Toggle,
} from './styles';

const data = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'História',
    link: '/história',
  },
  {
    label: 'Jogadores',
    link: '/jogadores',
  },
  {
    label: 'Arena',
    link: '/arena',
  },
  {
    label: 'Temporada',
    link: '/temporada',
  },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [openNav, setOpenNav] = useState(false);

  return (
    <Container>
      <Main>
        <Branch to="/">
          <img src={logo} alt="Perdão F.C." />
        </Branch>

        <Nav active={openNav}>
          {data.map(item => (
            <Button
              to={item.link}
              active={pathname === item.link}
            >
              {item.label}
            </Button>
          ))}
        </Nav>

        <Toggle onClick={() => setOpenNav(!openNav)}>
          {openNav ? <FiX /> : <FiMenu />}
        </Toggle>
      </Main>
    </Container>
  );
};

export default Header;
