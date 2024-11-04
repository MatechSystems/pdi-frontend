import React from "react";
import NivelCarreira from "./NivelCarreira";

function Etapas() {
  const niveis = [
    {
      titulo: "Start - Entrando no mundo Tech",
      objetivo: "Desenvolver conhecimentos básicos em tecnologia e habilidades essenciais para buscar uma vaga de estágio.",
      requisitos: [
        "Fundamentos de Lógica de Programação",
        "Conhecimento Básico de HTML e CSS",
        "Primeiro Contato com JavaScript",
        "Introdução ao Git e Controle de Versão",
        "Organização e Práticas de Estudo"
      ]
    },
    {
      titulo: "Nível 1 - Estagiário",
      objetivo: "Ganhar experiência prática e aprender fundamentos.",
      requisitos: [
        "Conhecimento básico em HTML, CSS e JavaScript",
        "Familiaridade com Git e controle de versão",
        "Comunicação eficaz e trabalho em equipe",
        "Capacidade de seguir instruções e trabalhar sob supervisão",
        "Conclusão de tarefas básicas com orientação"
      ]
    },
    {
      titulo: "Desenvolvedor Júnior",
      objetivo: "Consolidar conhecimentos iniciais e desenvolver autonomia.",
      subniveis: [
        {
          titulo: "Júnior Iniciante",
          requisitos: [
            "Conhecimento básico em HTML, CSS e JavaScript",
            "Primeiras experiências com Git, como criar branches e commits",
            "Participação em reuniões e boa comunicação em equipe",
            "Realização de tarefas com suporte do time"
          ]
        },
        {
          titulo: "Júnior Intermediário",
          requisitos: [
            "Experiência com interfaces interativas (front-end)",
            "Conhecimento básico em desenvolvimento de APIs (back-end)",
            "Uso básico de frameworks como React ou Vue",
            "Capacidade de trabalhar em uma task sem supervisão contínua",
            "Contribuição para projetos pequenos ou funcionalidades dentro de projetos maiores"
          ]
        },
        {
          titulo: "Júnior Avançado",
          requisitos: [
            "Compreensão do ciclo de vida completo de uma aplicação front-end",
            "Capacidade de integrar APIs com front-end",
            "Experiência em desenvolvimento de testes básicos",
            "Colaboração com desenvolvedores plenos e seniores",
            "Identificação e sugestão de melhorias em funcionalidades"
          ]
        }
      ]
    }
  ];

  return (
    <div>
      {niveis.map((nivel, index) => (
        <NivelCarreira
          key={index}
          titulo={nivel.titulo}
          objetivo={nivel.objetivo}
          requisitos={nivel.requisitos}
          subniveis={nivel.subniveis}
        />
      ))}
    </div>
  );
}

export default Etapas;

