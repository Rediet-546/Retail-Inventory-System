import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import ManagerDashboard from './pages/Manager';
import CashierDashboard from './pages/Cashier';
import Layout from './components/Layout/Layout';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import AdminUsers from './pages/Admin/Users';
import Landing from './pages/Landing';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check auth status on load
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
      >
        Loading...
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Public landing */}
        <Route path="/" element={<Landing />} />
        {/* Public routes */}
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        
        {/* Protected routes */}
        {currentUser ? (
          <Route path="/*" element={
            <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
              <Routes>
                <Route 
                  path="/admin/dashboard" 
                  element={
                    currentUser.role === 'admin' 
                      ? <AdminDashboard user={currentUser} /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="/admin/users" 
                  element={
                    currentUser.role === 'admin' 
                      ? <AdminUsers /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="/admin/reports" 
                  element={
                    currentUser.role === 'admin' 
                      ? <Reports /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="/admin/settings" 
                  element={
                    currentUser.role === 'admin' 
                      ? <Settings /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="/manager/dashboard" 
                  element={
                    currentUser.role === 'manager' 
                      ? <ManagerDashboard user={currentUser} /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="/cashier/dashboard" 
                  element={
                    currentUser.role === 'cashier' 
                      ? <CashierDashboard user={currentUser} /> 
                      : <Navigate to={`/${currentUser.role}/dashboard`} />
                  } 
                />
                <Route 
                  path="*" 
                  element={<Navigate to={`/${currentUser.role}/dashboard`} replace />} 
                />
              </Routes>
            </Layout>
          } />
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </ThemeProvider>
  );
}

export default App;