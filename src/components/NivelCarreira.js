import React, { useState } from 'react';

function NivelCarreira({ titulo, objetivo, requisitos, subniveis, atualizarPontos }) {
  const [completas, setCompletas] = useState([]);

  const marcarComoCompleta = (index) => {
    if (!completas.includes(index)) {
      setCompletas([...completas, index]);
      atualizarPontos(10);
    }
  };

  return (
    <div className="nivel-carreira card my-4 w-75 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        {objetivo && <p className="card-text">{objetivo}</p>}

        {requisitos && (
          <ul className="list-group list-group-flush">
            {requisitos.map((requisito, index) => (
              <li
                key={index}
                className={`list-group-item ${completas.includes(index) ? 'text-decoration-line-through' : ''}`}
              >
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  onClick={() => marcarComoCompleta(index)}
                  disabled={completas.includes(index)}
                />
                {requisito}
              </li>
            ))}
          </ul>
        )}

        {subniveis && subniveis.map((subnivel, subIndex) => (
          <div key={subIndex} className="subnivel mt-3">
            <h4>{subnivel.titulo}</h4>
            <ul className="list-group list-group-flush">
              {subnivel.requisitos.map((requisito, reqIndex) => (
                <li
                  key={reqIndex}
                  className={`list-group-item ${completas.includes(`${subIndex}-${reqIndex}`) ? 'text-decoration-line-through' : ''}`}
                >
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    onClick={() => marcarComoCompleta(`${subIndex}-${reqIndex}`)}
                    disabled={completas.includes(`${subIndex}-${reqIndex}`)}
                  />
                  {requisito}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NivelCarreira;
