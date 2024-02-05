import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getPikachuData from './PikachuInfo'; // Importe o arquivo PikachuInfo

function App() {
  const [pikachuData, setPikachuData] = useState(null);

  useEffect(() => {
    // Chame a função getPikachuData quando o componente App for montado
    getPikachuData()
      .then(data => {
        setPikachuData(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do Pikachu:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {pikachuData && (
          <div>
            <p>Nome: {pikachuData.name}</p>
            <p>Peso: {pikachuData.weight}</p>
            {/* Adicione mais campos conforme necessário */}
          </div>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;