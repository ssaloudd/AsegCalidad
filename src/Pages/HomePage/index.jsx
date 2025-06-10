import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const valor = parseFloat(lado);
    if (!isNaN(valor)) {
      setArea(valor * valor);
    } else {
      setArea(null);
    }
  };

  return (
    <div className="home-container">
          <h1 className="title">Calculadora de Área de un Cuadrado</h1>
          <input
              type="text"
              value={lado}
              onChange={(e) => {
                  const valor = e.target.value;
                  if (/^\d*$/.test(valor)) {
                      setLado(valor);
                  }
              }}
              placeholder="Ingresa el lado"
              className="input-box"
          />
          <button onClick={calcularArea} className="calc-button">Calcular Área</button>
      {area !== null && (
        <p className="result-text">Área: {area}</p>
      )}
    </div>
  );
};

export default HomePage;
