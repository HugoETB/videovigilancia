import React from 'react';
import alerts from '../mock/alerts';

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'alta': return 'bg-red-500';
    case 'critica': return 'bg-purple-500';
    case 'media': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'pendiente': return 'text-red-400';
    case 'revisado': return 'text-yellow-400';
    case 'resuelto': return 'text-green-400';
    default: return 'text-gray-400';
  }
};

const AlertList = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Alertas Recientes</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-white">{alert.type.replace('_', ' ')}</h3>
                <p className="text-sm text-gray-400">
                  Cámara ID: {alert.cameraId} • {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(alert.priority)}`}>
                  {alert.priority}
                </span>
                <span className={`text-xs ${getStatusColor(alert.status)}`}>
                  {alert.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertList;