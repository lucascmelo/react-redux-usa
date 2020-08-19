import React from 'react';
import { Top } from './styles';
import logoImg from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <Top>
      <img src={logoImg} alt="Github Explorer" />
    </Top>
  );
};

export default Header;
