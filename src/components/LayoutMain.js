import React from 'react';
import LayoutHeader from './LayoutHeader';
import SurveillanceCameraGrid from './SurveillanceCameraGrid';
import AlertList from './AlertList';
import IncidentHistory from './IncidentHistory';
import CitizenReportForm from './CitizenReportForm';
import AdminDashboard from './AdminDashboard';

const LayoutMain = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <LayoutHeader user={user} onLogout={onLogout} />
      <main className="container mx-auto p-4">
        {user.role === 'admin' && <AdminDashboard />}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <SurveillanceCameraGrid />
            <IncidentHistory />
          </div>
          <div className="space-y-6">
            <AlertList />
            {user.role === 'citizen' && <CitizenReportForm />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutMain;