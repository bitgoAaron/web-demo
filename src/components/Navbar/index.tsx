import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavbarContainer, NavItem } from './styles';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavItem
        activeRoute={pathname === 'login' || pathname === '/'}
        onClick={() => navigate('/')}
      >
        Login
      </NavItem>
      <NavItem
        activeRoute={pathname === '/bitgo'}
        onClick={() => navigate('/bitgo')}
      >
        BitGo
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
