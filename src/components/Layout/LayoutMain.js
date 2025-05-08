import React, { Suspense, lazy } from 'react';
import LayoutHeader from './LayoutHeader';
import NotificationSystem from '../Notifications/NotificationSystem';

const SurveillanceCameraGrid = lazy(() => import('../Camera/SurveillanceCameraGrid'));
const IncidentHistory = lazy(() => import('../Incidents/IncidentHistory'));
const CitizenReportForm = lazy(() => import('../Reports/CitizenReportForm'));
const AdminDashboard = lazy(() => import('../Admin/AdminDashboard'));
const CrimeHeatMap = lazy(() => import('../Map/CrimeHeatMap'));
const AuditLog = lazy(() => import('../Audit/AuditLog'));

const LayoutMain = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <LayoutHeader user={user} onLogout={onLogout} />
      <NotificationSystem user={user} />
      <main className="container mx-auto p-4">
        <Suspense fallback={<div className="text-center py-8">Cargando...</div>}>
          {user.role === 'admin' && <AdminDashboard />}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 space-y-6">
              <CrimeHeatMap />
              <SurveillanceCameraGrid />
              <IncidentHistory />
            </div>
            <div className="space-y-6">
              <AuditLog />
              {user.role === 'citizen' && <CitizenReportForm />}
            </div>
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default LayoutMain;

// DONE

MEJORAS IMPLEMENTADAS:
1. JSON Server para persistencia de datos
2. Protección de rutas basada en roles
3. Sistema de notificaciones en tiempo real
4. Mapa de calor interactivo
5. Bitácora de auditoría completa
6. Lazy loading para optimización
7. Mejoras de accesibilidad y estructura para i18n
8. Arquitectura de servicios separada
9. Componentes modularizados
10. Manejo de errores mejorado