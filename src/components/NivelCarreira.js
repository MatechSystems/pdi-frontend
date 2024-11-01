import React from 'react';

function NivelCarreira({ titulo, descricao, requisitos }) {
  return (
    <div >
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <ul>
        {requisitos.map((requisito, index) => (
          <li key={index}>
            <input type="checkbox" />
            {requisito}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NivelCarreira;
