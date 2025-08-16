import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Auth/Login';
import ManagersPage from './pages/Manager';
import ManagerFormPage from './pages/Manager/[id]';
import CashiersPage from './pages/Cashier';
import CashierFormPage from './pages/Cashier/[id]';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const App = () => {
  const [user, setUser] = useState(null);
  const [managers, setManagers] = useState([]);
  const [cashiers, setCashiers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Mock data initialization
    setManagers([
      { id: '1', name: 'John Doe', email: 'john@example.com', createdAt: '2023-01-15' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', createdAt: '2023-02-20' },
    ]);

    setCashiers([
      { id: '1', name: 'Bob Johnson', email: 'bob@example.com', createdAt: '2023-03-10' },
      { id: '2', name: 'Alice Brown', email: 'alice@example.com', createdAt: '2023-04-05' },
    ]);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const handleManagerSubmit = (managerData) => {
    if (managerData.id) {
      setManagers(managers.map(m => 
        m.id === managerData.id ? { ...m, ...managerData } : m
      ));
    } else {
      const newManager = {
        ...managerData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      setManagers([...managers, newManager]);
    }
  };

  const handleManagerDelete = (id) => {
    setManagers(managers.filter(m => m.id !== id));
  };

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar user={user} />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/managers" element={
              <ManagersPage 
                managers={managers} 
                onDelete={handleManagerDelete} 
                userRole={user?.role}
              />
            } />
            <Route path="/managers/new" element={
              <ManagerFormPage onSubmit={handleManagerSubmit} />
            } />
            <Route path="/managers/:id" element={
              <ManagerFormPage 
                managers={managers} 
                onSubmit={handleManagerSubmit} 
              />
            } />
            <Route path="/cashiers" element={
              <CashiersPage 
                cashiers={cashiers} 
                onDelete={handleManagerDelete} 
                userRole={user?.role}
              />
            } />
            <Route path="/cashiers/new" element={
              <CashierFormPage onSubmit={handleManagerSubmit} />
            } />
            <Route path="/cashiers/:id" element={
              <CashierFormPage 
                cashiers={cashiers} 
                onSubmit={handleManagerSubmit} 
              />
            } />
            <Route path="/reports" element={<Reports user={user} />} />
            <Route path="/settings" element={<Settings user={user} />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;