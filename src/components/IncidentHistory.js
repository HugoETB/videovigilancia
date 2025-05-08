import React, { useState } from 'react';
import incidents from '../mock/incidents';

const IncidentHistory = () => {
  const [filter, setFilter] = useState('all');

  const filteredIncidents = incidents.filter((incident) => {
    if (filter === 'all') return true;
    return incident.status === filter;
  });

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Historial de Incidentes</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-1"
        >
          <option value="all">Todos</option>
          <option value="investigación">En investigación</option>
          <option value="resuelto">Resueltos</option>
          <option value="archivado">Archivados</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="pb-2 text-gray-400 font-medium">Tipo</th>
              <th className="pb-2 text-gray-400 font-medium">Ubicación</th>
              <th className="pb-2 text-gray-400 font-medium">Fecha</th>
              <th className="pb-2 text-gray-400 font-medium">Reportado por</th>
              <th className="pb-2 text-gray-400 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredIncidents.map((incident) => (
              <tr key={incident.id} className="border-b border-gray-700">
                <td className="py-3 text-white">{incident.type}</td>
                <td className="py-3 text-gray-400">{incident.location}</td>
                <td className="py-3 text-gray-400">{new Date(incident.timestamp).toLocaleString()}</td>
                <td className="py-3 text-gray-400">{incident.reportedBy}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    incident.status === 'investigación' ? 'bg-yellow-500' :
                    incident.status === 'resuelto' ? 'bg-green-500' : 'bg-gray-500'
                  }`}>
                    {incident.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentHistory;