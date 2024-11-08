import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function NivelCarreira({ nivel, atualizarPontos }) {
  const [completas, setCompletas] = useState([]);

  const marcarComoCompleta = (eventoHTML, liIndex, requisitoId, nivelID) => {
    console.log('checked', eventoHTML.target.checked);
    console.log('requisitoId', requisitoId);
    console.log('nivelId', nivelID);

    // encontrar o objeto requisito dentro do array de requisitosusando o requisitoID
    // alterar o "feito" do objeto (requisito) para o valor do target.checked
    // atualizar o requisitoS usando o setRequisitos setRequisitos(prev => [...prev, requisito])

    if (!completas.includes(liIndex)) {
      setCompletas([...completas, liIndex]);
      atualizarPontos(10);
    }
  };

  // const handleCheckboxChange = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  return (
    <div className="nivel-carreira card my-4 w-75 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{nivel.titulo}</h2>
        {nivel.objetivo && <p className="card-text">{nivel.objetivo}</p>}

        {nivel.requisitos && (
          <ul className="list-group list-group-flush">
            {nivel.requisitos.map((requisito, index) => (
              <li
                key={index}
                className={`list-group-item ${completas.includes(index) ? 'text-decoration-line-through' : ''}`}
              >
                {/* <input
                  type="checkbox"
                  className="form-check-input me-2"
                  onClick={() => marcarComoCompleta(index)}
                  disabled={completas.includes(index)}
                /> */}
                {/* {requisito.titulo} */}
                <Form.Check
                  type="checkbox"
                  label={requisito.titulo}
                  checked={requisito.feito}
                  onChange={(e) =>
                    marcarComoCompleta(e, index, requisito.id, nivel.id)
                  }
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
                  <li
                    key={reqIndex}
                    className={`list-group-item ${completas.includes(`${subIndex}-${reqIndex}`) ? 'text-decoration-line-through' : ''}`}
                  >
                    <Form.Check
                      type="checkbox"
                      label={requisito.titulo}
                      checked={requisito.feito}
                      onChange={(e) =>
                        marcarComoCompleta(e, reqIndex, requisito.id, nivel.id)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

NivelCarreira.propTypes = {
  nivel: PropTypes.object.isRequired,
  atualizarPontos: PropTypes.func.isRequired,
};

export default NivelCarreira;
