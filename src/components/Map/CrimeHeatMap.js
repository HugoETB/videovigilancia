import React from 'react';

const CrimeHeatMap = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg h-96">
      <h2 className="text-xl font-bold text-white mb-4">Mapa de Calor</h2>
      <div className="h-full bg-gray-700 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Mapa interactivo con zonas de calor</p>
      </div>
    </div>
  );
};

export default CrimeHeatMap;