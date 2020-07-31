import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://tarcisiovalentim.github.io/portfolio/">
        <img src="https://fontmeme.com/permalink/200729/29d0ef452cb80cb6f6e6d77272f35503.png" />
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
