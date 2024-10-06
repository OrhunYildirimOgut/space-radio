// src/components/DataPanel.jsx
import React from 'react';

function DataPanel({ activePlanet, onSelectPlanet }) {
  const planets = [
    'sun', // Güneşi ekledik
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
  ];

  return (
    <div id="data">
      {planets.map((planet) => (
        <a
        key={planet}
        className={`${planet} ${activePlanet === planet ? 'active' : ''}`}
        title={planet}
        href={`#${planet}speed`}
        onClick={(e) => {
            e.preventDefault();
            onSelectPlanet(planet);
        }}
        >
        {planet.charAt(0).toUpperCase() + planet.slice(1)}
        </a>
      ))}
    </div>
  );
}

export default DataPanel;
