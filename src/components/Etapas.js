import React from "react";
import NivelCarreira from "./NivelCarreira";

function Etapas() {
  const niveis = [
    {
      titulo: "Nivel 1 - Estágiario",
      descricao: "Ganhar experiência prática e aprender fundamentos.",
      requisitos: [
        "Conhecimento básico em HTML, CSS e JavaScript",
        "Familiaridade com Git e controle de versão",
        "Comunicação eficaz e trabalho em equipe",
        "Capacidade de seguir instruções e trabalhar sob supervisão",
        "Conclusão de tarefas básicas com orientação"
      ]
  },
    {
      titulo: "Nivel 2 - Junior",
      descricao: "Consolidar conhecimentos iniciais e desenvolver autonomia.",
      requisitos: [
        "Experiência com interfaces interativas (front-end)",
        "Conhecimento básico em desenvolvimento de APIs (back-end)",
        "Habilidade em resolver problemas técnicos",
        "Uso de frameworks como React ou Vue",
        "Participação em projetos pequenos de forma independente"
      ]
    }
  ];

  return (
    <div >
      {niveis.map((nivel, index) => (
        <NivelCarreira
          key={index}
          titulo={nivel.titulo}
          descricao={nivel.descricao}
          requisitos={nivel.requisitos}
        />
      ))}
    </div>
  );
}

export default Etapas;

