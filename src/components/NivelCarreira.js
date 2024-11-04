import React from 'react';

function NivelCarreira({ titulo, objetivo, requisitos, subniveis }) {
  return (
    <div className="nivel-carreira card my-4 w-75 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        {objetivo && <p className="card-text">{objetivo}</p>}

        {requisitos && (
          <ul className="list-group list-group-flush">
            {requisitos.map((requisito, index) => (
              <li key={index} className="list-group-item">
                <input type="checkbox" className="form-check-input me-2" />
                {requisito}
              </li>
            ))}
          </ul>
        )}

        {subniveis && subniveis.map((subnivel, index) => (
          <div key={index} className="subnivel mt-3">
            <h4>{subnivel.titulo}</h4>
            <ul className="list-group list-group-flush">
              {subnivel.requisitos.map((requisito, subIndex) => (
                <li key={subIndex} className="list-group-item">
                  <input type="checkbox" className="form-check-input me-2" />
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
