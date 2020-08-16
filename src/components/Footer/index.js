import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/Logo3.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://tarcisiovalentim.github.io/js-portfolio/">
          <img src={logo} alt="LogoDev"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
