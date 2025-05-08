import React from 'react';
import cameras from '../mock/cameras';

const SurveillanceCameraGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cameras.map((camera) => (
        <div key={camera.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="relative">
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-400">Vista de cámara: {camera.name}</span>
            </div>
            <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs ${
              camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {camera.status === 'active' ? 'Activa' : 'Inactiva'}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{camera.name}</h3>
            <p className="text-gray-400">{camera.location}</p>
            <p className="text-gray-500 text-sm mt-2">
              Última actividad: {new Date(camera.lastActivity).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurveillanceCameraGrid;