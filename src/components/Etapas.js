import React from 'react';
import PropTypes from 'prop-types';
import NivelCarreira from './NivelCarreira';

function Etapas({ atualizarPontos, niveis }) {
  return (
    <div>
      {niveis.map((nivel, index) => (
        <NivelCarreira
          nivel={nivel}
          key={index}
          atualizarPontos={atualizarPontos}
        />
      ))}
    </div>
  );
}

Etapas.propTypes = {
  atualizarPontos: PropTypes.func.isRequired,
  niveis: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Etapas;
