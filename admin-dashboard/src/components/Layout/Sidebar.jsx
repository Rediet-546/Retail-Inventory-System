import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { 
  Dashboard, 
  People, 
  Person, 
  Assessment, 
  Settings,
  ShoppingCart
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ currentUser }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <Dashboard /> },
    { name: 'User Management', path: '/admin/users', icon: <People /> },
    { name: 'Reports & Logs', path: '/admin/reports', icon: <Assessment /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings /> },
  ];

  const managerLinks = [
    { name: 'Dashboard', path: '/manager/dashboard', icon: <Dashboard /> },
    { name: 'Cashiers', path: '/manager/cashiers', icon: <Person /> },
    { name: 'Reports', path: '/manager/reports', icon: <Assessment /> },
  ];

  const cashierLinks = [
    { name: 'Dashboard', path: '/cashier/dashboard', icon: <Dashboard /> },
    { name: 'Sales', path: '/cashier/sales', icon: <ShoppingCart /> },
  ];

  const links = currentUser?.role === 'admin' 
    ? adminLinks 
    : currentUser?.role === 'manager' 
      ? managerLinks 
      : cashierLinks;

  return (
    <Box sx={{ width: 240, flexShrink: 0 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="primary">
          {currentUser?.role?.charAt(0).toUpperCase() + currentUser?.role?.slice(1)} Panel
        </Typography>
      </Box>
      <Divider />
      <List>
        {links.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={Link}
              to={link.path}
              selected={isActive(link.path)}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive(link.path) ? 'white' : 'inherit' }}>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;