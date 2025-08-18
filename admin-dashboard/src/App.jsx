import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check auth status on load
    const user = localStorage.getItem('currentUser');
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
      <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
      
      {/* Protected routes */}
      {currentUser ? (
        <>
          <Route 
            path="/admin/dashboard" 
            element={
              currentUser.role === 'admin' 
                ? <AdminDashboard /> 
                : <Navigate to={`/${currentUser.role}/dashboard`} />
            } 
          />
          <Route 
            path="/manager/dashboard" 
            element={
              currentUser.role === 'manager' 
                ? <ManagerDashboard /> 
                : <Navigate to={`/${currentUser.role}/dashboard`} />
            } 
          />
          <Route 
            path="/cashier/dashboard" 
            element={
              currentUser.role === 'cashier' 
                ? <CashierDashboard /> 
                : <Navigate to={`/${currentUser.role}/dashboard`} />
            } 
          />
          <Route 
            path="*" 
            element={<Navigate to={`/${currentUser.role}/dashboard`} replace />} 
          />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

export default App;