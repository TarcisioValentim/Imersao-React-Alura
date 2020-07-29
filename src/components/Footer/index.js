import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://tarcisiovalentim.github.io/meuportifolio/">
        <img src="https://fontmeme.com/permalink/200729/1583a07a5dfde28037bb1706733e58ce.png" alt="Logo webflix" />
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
