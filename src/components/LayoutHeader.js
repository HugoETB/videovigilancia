import React from 'react';

const LayoutHeader = ({ user, onLogout }) => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">VisionGuard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Bienvenido, {user.name}</span>
          <span className="px-3 py-1 bg-blue-600 rounded-full text-xs">{user.role}</span>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition duration-200"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;