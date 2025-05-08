import React from 'react';
import useApi from '../../services/api';

const AuditLog = () => {
  const { data: logs, loading } = useApi('auditLog');

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Bitácora de Auditoría</h2>
      <div className="space-y-2">
        {loading ? (
          <p className="text-gray-400">Cargando...</p>
        ) : (
          logs.map(log => (
            <div key={log.id} className="bg-gray-700 p-3 rounded-lg">
              <p className="text-white">{log.action}</p>
              <p className="text-gray-400 text-sm">{new Date(log.timestamp).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuditLog;