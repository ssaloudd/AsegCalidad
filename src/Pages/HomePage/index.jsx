import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  // Estado para cuadrado
  const [lado, setLado] = useState('');
  const [areaCuadrado, setAreaCuadrado] = useState(null);

  // Estado para triángulo
  const [baseTri, setBaseTri] = useState('');
  const [alturaTri, setAlturaTri] = useState('');
  const [areaTriangulo, setAreaTriangulo] = useState(null);

  const soloNumeros = (valor) => /^\d*$/.test(valor);

  const calcularAreaCuadrado = () => {
    if (lado) {
      setAreaCuadrado(Number(lado) * Number(lado));
    }
  };

  const calcularAreaTriangulo = () => {
    if (baseTri && alturaTri) {
      setAreaTriangulo((Number(baseTri) * Number(alturaTri)) / 2);
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Calculadora de Áreas</h1>
      <div className="card">
        <h2>Área del Cuadrado</h2>
        <input
          type="text"
          placeholder="Lado"
          value={lado}
          onChange={(e) => soloNumeros(e.target.value) && setLado(e.target.value)}
        />
        <button onClick={calcularAreaCuadrado}>Calcular</button>
        {areaCuadrado !== null && <p className="bold">Área: {areaCuadrado} u²</p>}
      </div>

      <div className="card">
        <h2>Área del Triángulo</h2>
        <td>
          <p>Base</p>
          <input
            type="text"
            placeholder="Base"
            value={baseTri}
            onChange={(e) => soloNumeros(e.target.value) && setBaseTri(e.target.value)}
          />
        </td>
        <td>
          <p>Altura</p>
          <input
            type="text"
            placeholder="Altura"
            value={alturaTri}
            onChange={(e) => soloNumeros(e.target.value) && setAlturaTri(e.target.value)}
          />
          <button onClick={calcularAreaTriangulo}>Calcular</button>
        </td>
        {areaTriangulo !== null && <p className="bold">Área: {areaTriangulo} u²</p>}
      </div>
    </div>
  );
};

export default HomePage;
