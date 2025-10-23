import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import LoginForm from '../../components/Auth/LoginForm';

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = async ({ username, password }) => {
    console.log('Login attempt:', { username, password });
    
    // In a real app, you would make an API call here
    // For demo purposes, we'll use hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      console.log('Admin login successful');
      const userData = { username, role: 'admin' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setCurrentUser(userData);
      navigate('/admin/dashboard');
      return;
    } else if (username === 'manager' && password === 'manager123') {
      console.log('Manager login successful');
      const userData = { username, role: 'manager' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setCurrentUser(userData);
      navigate('/manager/dashboard');
      return;
    } else if (username === 'cashier' && password === 'cashier123') {
      console.log('Cashier login successful');
      const userData = { username, role: 'cashier' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      setCurrentUser(userData);
      navigate('/cashier/dashboard');
      return;
    }
    console.log('Login failed - invalid credentials');
    throw new Error('Invalid credentials');
  };

  // Test function to verify authentication works
  const testAdminLogin = () => {
    console.log('Testing admin login...');
    handleLogin({ username: 'admin', password: 'admin123' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <LoginForm onLogin={handleLogin} />
        
        {/* Test buttons for debugging */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Quick Test Buttons:
          </Typography>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={testAdminLogin}
            sx={{ mr: 1 }}
          >
            Test Admin Login
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => handleLogin({ username: 'manager', password: 'manager123' })}
            sx={{ mr: 1 }}
          >
            Test Manager Login
          </Button>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => handleLogin({ username: 'cashier', password: 'cashier123' })}
          >
            Test Cashier Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;