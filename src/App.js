import React, { useState } from 'react';
import AuthLoginForm from './components/AuthLoginForm';
import LayoutMain from './components/LayoutMain';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  // Verificar si hay un usuario en localStorage al cargar
  React.useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="App">
      {!user ? (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <AuthLoginForm onLogin={handleLogin} />
        </div>
      ) : (
        <LayoutMain user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

// DONE