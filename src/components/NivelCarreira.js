import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function NivelCarreira({ nivel, atualizarPontos, handleSetNiveis }) {
  const marcarComoCompleta = (eventoHTML, requisitoId) => {
    handleSetNiveis((prevNiveis) => {
      const newNiveis = [...prevNiveis];
      console.log(newNiveis);

      const nivelPosition = newNiveis.find((nivel) => nivel.id);
      console.log(nivelPosition);

      nivelPosition.requisitos.find((requisito) => {
        if (requisito.id === requisitoId) {
          requisito.feito = eventoHTML.target.checked;
        }
      });

      console.log(nivelPosition);

      return [...prevNiveis, nivelPosition];
    });

    atualizarPontos(10);
  };

  return (
    <div className="nivel-carreira card my-4 w-75 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{nivel.titulo}</h2>
        {nivel.objetivo && <p className="card-text">{nivel.objetivo}</p>}

        <Form>
          {nivel.requisitos && (
            <ul className="list-group list-group-flush">
              {nivel.requisitos.map((requisito, index) => (
                <li key={index} className="list-group-item">
                  <Form.Check
                    // id={`${nivel.id}-${requisito.id}`}
                    type="checkbox"
                    label={requisito.titulo}
                    checked={requisito.feito}
                    onChange={(e) => marcarComoCompleta(e, requisito.id)}
                  />
                </li>
              ))}
            </ul>
          )}

          {nivel.subniveis &&
            nivel.subniveis.map((subnivel, subIndex) => (
              <div key={subIndex} className="subnivel mt-3">
                <h4>{subnivel.titulo}</h4>
                <ul className="list-group list-group-flush">
                  {subnivel.requisitos.map((requisito, reqIndex) => (
                    <li key={reqIndex} className="list-group-item">
                      <Form.Check
                        type="checkbox"
                        label={requisito.titulo}
                        checked={requisito.feito}
                        onChange={(e) => marcarComoCompleta(e, requisito.id)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </Form>
      </div>
    </div>
  );
}

NivelCarreira.propTypes = {
  nivel: PropTypes.object.isRequired,
  atualizarPontos: PropTypes.func.isRequired,
  handleSetNiveis: PropTypes.func.isRequired,
};

export default NivelCarreira;
