import React, { useState, useEffect } from 'react';

const NotificationSystem = ({ user }) => {
  const [notifications, setNotifications] = useState([]);
  const { data: alerts } = useApi('alerts');

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlerts = alerts.filter(alert => 
        alert.status === 'pendiente' && 
        !notifications.some(n => n.id === alert.id)
      );
      
      if (newAlerts.length > 0) {
        setNotifications(prev => [...prev, ...newAlerts]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [alerts, notifications]);

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map(alert => (
        <div 
          key={alert.id}
          className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Nueva alerta: {alert.type}
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;