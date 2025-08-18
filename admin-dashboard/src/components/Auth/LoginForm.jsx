import { useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async ({ username, password }) => {
    // In a real app, you would make an API call here
    // For demo purposes, we'll use hardcoded credentials
    if (username === 'admin' && password === 'admin123') {
      setUser({ username, role: 'admin' });
      localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
      return;
    } else if (username === 'manager' && password === 'manager123') {
      setUser({ username, role: 'manager' });
      localStorage.setItem('user', JSON.stringify({ username, role: 'manager' }));
      return;
    } else if (username === 'cashier' && password === 'cashier123') {
      setUser({ username, role: 'cashier' });
      localStorage.setItem('user', JSON.stringify({ username, role: 'cashier' }));
      return;
    }
    throw new Error('Invalid credentials');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;