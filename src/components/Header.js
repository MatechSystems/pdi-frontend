import React from 'react';
import PropTypes from 'prop-types';

function Header({ pontos }) {
  return (
    <header className="text-center">
      <h1>Projeto de Desenvolvimento Individual</h1>
      <p>Guia Prático para Evoluir na Carreira de Tecnologia</p>
      <p>Pontuação: {pontos}</p>
    </header>
  );
}

Header.propTypes = {
  pontos: PropTypes.number.isRequired,
};

export default Header;
