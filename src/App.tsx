// import React from 'react';
import './App.css';

import logoImg from './assets/logo-oficina1.png';

function App() {
  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="logo da oficina do toty" />
        <h1 className="title">Faça seu orçamento aqui!</h1>

        <form className="form">
          <label>Altura da grade (em cm)</label>
          <input className="input" placeholder="100" />

          <label>Largura da grade (em cm)</label>
          <input className="input" placeholder="100 " />

          <input className="button" type="submit" value="Calcular" />
        </form>

        <section className="result">
          <h2 className="result-title">O valor da sua grade é:</h2>
          <span>Metalon: </span>
          <span>Barrinha:</span>
        </section>
      </main>
    </div>
  );
}

export default App;
