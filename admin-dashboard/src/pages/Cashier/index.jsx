import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { ShoppingCart, Receipt, Person } from '@mui/icons-material';

const CashierDashboard = ({ user }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cashier Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <ShoppingCart sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              New Sale
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Start a new transaction
            </Typography>
            <Button variant="contained" fullWidth>
              Create Sale
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Receipt sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Recent Sales
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              View today's transactions
            </Typography>
            <Button variant="outlined" fullWidth>
              View Sales
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Person sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Manage your account
            </Typography>
            <Button variant="outlined" fullWidth>
              Edit Profile
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CashierDashboard;