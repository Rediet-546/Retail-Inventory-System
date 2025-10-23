import { Paper, Typography, Grid, Card, CardContent, CardActionArea, Box } from '@mui/material';
import { 
  PersonAdd, 
  Assessment, 
  Settings, 
  People,
  ShoppingCart
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const QuickLinks = ({ user }) => {
  const navigate = useNavigate();
  
  const links = [
    { 
      name: 'User Management', 
      path: '/admin/users', 
      icon: <People sx={{ fontSize: 32, color: 'primary.main' }} />, 
      visible: user?.role === 'admin' 
    },
    { 
      name: 'Add Cashier', 
      path: '/manager/cashiers', 
      icon: <PersonAdd sx={{ fontSize: 32, color: 'success.main' }} />, 
      visible: user?.role === 'manager' 
    },
    { 
      name: 'View Reports', 
      path: user?.role === 'admin' ? '/admin/reports' : '/manager/reports', 
      icon: <Assessment sx={{ fontSize: 32, color: 'info.main' }} />, 
      visible: user?.role !== 'cashier' 
    },
    { 
      name: 'Settings', 
      path: '/admin/settings', 
      icon: <Settings sx={{ fontSize: 32, color: 'warning.main' }} />, 
      visible: user?.role === 'admin' 
    },
    { 
      name: 'New Sale', 
      path: '/cashier/sales', 
      icon: <ShoppingCart sx={{ fontSize: 32, color: 'primary.main' }} />, 
      visible: user?.role === 'cashier' 
    },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Quick Actions
      </Typography>
      <Grid container spacing={2}>
        {links
          .filter(link => link.visible)
          .map((link) => (
            <Grid item xs={6} key={link.name}>
              <Card>
                <CardActionArea onClick={() => handleClick(link.path)}>
                  <CardContent sx={{ textAlign: 'center', py: 2 }}>
                    <Box sx={{ mb: 1 }}>
                      {link.icon}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {link.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default QuickLinks;