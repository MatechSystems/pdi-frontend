import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Etapas from './components/Etapas';

function App() {
  const [pontos, setPontos] = useState(0);

  const atualizarPontos = (valor) => {
    setPontos(pontos + valor);

  };

  useEffect(() => {

  }, [pontos]);

  return (
    <div>
      <Header pontos={pontos} />
      <Etapas atualizarPontos={atualizarPontos} />
    </div>
  );
}

export default App;
