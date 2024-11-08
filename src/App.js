import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Etapas from './components/Etapas';

function App() {
  const [pontos, setPontos] = useState(0);

  const atualizarPontos = (valor) => {
    setPontos(pontos + valor);
  };

  const niveis = [
    {
      id: 1,
      titulo: 'Start - Entrando no mundo Tech',
      objetivo:
        'Desenvolver conhecimentos básicos em tecnologia e habilidades essenciais para buscar uma vaga de estágio.',
      requisitos: [
        {
          id: 1,
          feito: true,
          titulo: 'Fundamentos de Lógica de Programação',
        },
        {
          id: 2,
          feito: true,
          titulo: 'Conhecimento Básico de HTML e CSS',
        },
        {
          id: 3,
          feito: true,
          titulo: 'Primeiro Contato com JavaScript',
        },
        {
          id: 4,
          feito: true,
          titulo: 'Introdução ao Git e Controle de Versção',
        },
        { id: 5, feito: true, titulo: 'Organização e Práticas de Estudo' },
      ],
    },
    {
      id: 2,
      titulo: 'Estagiário',
      objetivo: 'Ganhar experiência prática e aprender fundamentos.',
      requisitos: [
        {
          id: 1,
          feito: false,
          titulo: 'Conhecimento básico em HTML, CSS e JavaScript',
        },
        {
          id: 2,
          feito: false,
          titulo: 'Familiaridade com Git e controle de versão',
        },
        {
          id: 3,
          feito: false,
          titulo: 'Comunicação eficaz e trabalho em equipe',
        },
        {
          id: 4,
          feito: false,
          titulo: 'Capacidade de seguir instruções e trabalhar sob supervisão',
        },
        {
          id: 5,
          feito: false,
          titulo: 'Conclusão de tarefas básicas com orientação',
        },
      ],
    },
    {
      id: 3,
      titulo: 'Desenvolvedor Júnior',
      objetivo: 'Consolidar conhecimentos iniciais e desenvolver autonomia.',
      subniveis: [
        {
          titulo: 'Júnior Iniciante',
          requisitos: [
            {
              id: 1,
              feito: false,
              titulo: 'Conhecimento básico em HTML, CSS e JavaScript',
            },
            {
              id: 2,
              feito: false,
              titulo:
                'Primeiras experiências com Git, como criar branches e commits',
            },
            {
              id: 3,
              feito: false,
              titulo: 'Participação em reuniões e boa comunicação em equipe',
            },
            {
              id: 4,
              feito: false,
              titulo: 'Realização de tarefas com suporte do time',
            },
          ],
        },
        {
          titulo: 'Júnior Intermediário',
          requisitos: [
            {
              id: 1,
              feito: false,
              titulo: 'Experiência com interfaces interativas (front-end)',
            },
            {
              id: 2,
              feito: false,
              titulo:
                'Conhecimento básico em desenvolvimento de APIs (back-end)',
            },
            {
              id: 3,
              feito: false,
              titulo: 'Uso básico de frameworks como React ou Vue',
            },
            {
              id: 4,
              feito: false,
              titulo:
                'Capacidade de trabalhar em uma task sem supervisão contínua',
            },
            {
              id: 5,
              feito: false,
              titulo:
                'Contribuição para projetos pequenos ou funcionalidades dentro de projetos maiores',
            },
          ],
        },
        {
          titulo: 'Júnior Avançado',
          requisitos: [
            {
              id: 1,
              feito: false,
              titulo:
                'Compreensão do ciclo de vida completo de uma aplicação front-end',
            },
            {
              id: 2,
              feito: false,
              titulo: 'Capacidade de integrar APIs com front-end',
            },
            {
              id: 3,
              feito: false,
              titulo: 'Experiência em desenvolvimento de testes básicos',
            },
            {
              id: 4,
              feito: false,
              titulo: 'Colaboração com desenvolvedores plenos e seniores',
            },
            {
              id: 5,
              feito: false,
              titulo:
                'Identificação e sugestão de melhorias em funcionalidades',
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {}, [pontos]);

  return (
    <div>
      <Header pontos={pontos} />
      <Etapas atualizarPontos={atualizarPontos} niveis={niveis} />
    </div>
  );
}

export default App;
