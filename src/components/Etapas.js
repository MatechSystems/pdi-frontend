import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NivelCarreira from './NivelCarreira';

function Etapas({ atualizarPontos, niveisProp }) {
  const [niveis, setNiveis] = useState(niveisProp);

  useEffect(() => {}, [niveisProp]);

  return (
    <div>
      {niveis &&
        niveis.map((nivel, index) => (
          <NivelCarreira
            nivel={nivel}
            key={index}
            atualizarPontos={atualizarPontos}
            handleSetNiveis={setNiveis}
          />
        ))}
    </div>
  );
}

Etapas.propTypes = {
  atualizarPontos: PropTypes.func.isRequired,
  niveisProp: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Etapas;
