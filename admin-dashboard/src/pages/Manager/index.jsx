import { Box, Typography, Grid, Paper } from '@mui/material';
import Cards from '../../components/Dashboard/Cards';
import SalesChart from '../../components/Dashboard/SalesChart';
import QuickLinks from '../../components/Dashboard/QuickLinks';

const ManagerDashboard = ({ user }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Manager Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Cards />
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <SalesChart />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <QuickLinks user={user} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManagerDashboard;