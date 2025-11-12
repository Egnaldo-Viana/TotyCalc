import React from 'react';
import './App.css';

import logoImg from './assets/logo-oficina1.png';

function App() {
  const [alturaInput, setAlturaInput] = React.useState('');
  const [larguraInput, setLarguraInput] = React.useState('');
  const [metalon, setMetalon] = React.useState(0);
  const [barrinha, setBarrinha] = React.useState(0);

  function calculaOrcamento(event: React.FormEvent) {
    event.preventDefault();

    setMetalon(
      (((Number(alturaInput) * Number(larguraInput)) / 100) * 350) / 100,
    );
    setBarrinha(
      (((Number(alturaInput) * Number(larguraInput)) / 100) * 250) / 100,
    );
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo da oficina do toty" />
        <h1 className="title">Faça seu orçamento aqui!</h1>

        <form className="form" onSubmit={calculaOrcamento}>
          <label>Altura da grade (em cm)</label>
          <input
            className="input"
            type="number"
            placeholder="100"
            min="1"
            step="0.01"
            value={alturaInput}
            onChange={(e) => setAlturaInput(e.target.value)}
          />

          <label>Largura da grade (em cm)</label>
          <input
            className="input"
            type="number"
            placeholder="100"
            min="1"
            step="0.01"
            value={larguraInput}
            onChange={(e) => setLarguraInput(e.target.value)}
          />

          <input className="button" type="submit" value="Calcular" />
        </form>

        <section className="result">
          <h2 className="result-title">O valor da sua grade é:</h2>
          <span>Metalon: R$ {metalon}</span>
          <span>Barrinha: R$ {barrinha}</span>
        </section>
      </main>
    </div>
  );
}

export default App;
