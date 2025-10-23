import { Box, Typography, Grid } from '@mui/material';
import Cards from '../../components/Dashboard/Cards';
import SalesChart from '../../components/Dashboard/SalesChart';
import QuickLinks from '../../components/Dashboard/QuickLinks';

const AdminDashboard = ({ user }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Cards />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <SalesChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <QuickLinks user={user} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;