import React from 'react';
import alerts from '../mock/alerts';
import incidents from '../mock/incidents';

const AdminDashboard = () => {
  const totalAlerts = alerts.length;
  const pendingAlerts = alerts.filter(a => a.status === 'pendiente').length;
  const criticalAlerts = alerts.filter(a => a.priority === 'critica').length;
  const totalIncidents = incidents.length;
  const activeInvestigations = incidents.filter(i => i.status === 'investigación').length;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">Panel Administrativo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-1">Alertas Totales</h3>
          <p className="text-2xl font-bold text-white">{totalAlerts}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-1">Alertas Pendientes</h3>
          <p className="text-2xl font-bold text-yellow-400">{pendingAlerts}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-1">Alertas Críticas</h3>
          <p className="text-2xl font-bold text-red-400">{criticalAlerts}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-1">Incidentes Totales</h3>
          <p className="text-2xl font-bold text-white">{totalIncidents}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-1">Investigaciones Activas</h3>
          <p className="text-2xl font-bold text-blue-400">{activeInvestigations}</p>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-gray-400 text-sm mb-2">Zonas con más incidentes</h3>
        <div className="h-64 flex items-center justify-center text-gray-500">
          [Gráfico de zonas críticas iría aquí]
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;