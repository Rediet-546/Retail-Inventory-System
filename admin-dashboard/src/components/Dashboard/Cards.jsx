import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, TrendingDown, People, ShoppingCart, Inventory, AttachMoney } from '@mui/icons-material';

const Cards = () => {
  const stats = [
    { 
      name: 'Total Sales', 
      value: '$12,345', 
      change: '+12%', 
      changeType: 'positive',
      icon: <AttachMoney sx={{ fontSize: 40, color: 'success.main' }} />
    },
    { 
      name: 'Total Users', 
      value: '245', 
      change: '+5%', 
      changeType: 'positive',
      icon: <People sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    { 
      name: 'Total Products', 
      value: '1,234', 
      change: '+8%', 
      changeType: 'positive',
      icon: <Inventory sx={{ fontSize: 40, color: 'info.main' }} />
    },
    { 
      name: 'Active Cashiers', 
      value: '12', 
      change: '-2%', 
      changeType: 'negative',
      icon: <ShoppingCart sx={{ fontSize: 40, color: 'warning.main' }} />
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.name}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom variant="body2">
                    {stat.name}
                  </Typography>
                  <Typography variant="h4" component="div">
                    {stat.value}
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    {stat.changeType === 'positive' ? (
                      <TrendingUp sx={{ color: 'success.main', fontSize: 16, mr: 0.5 }} />
                    ) : (
                      <TrendingDown sx={{ color: 'error.main', fontSize: 16, mr: 0.5 }} />
                    )}
                    <Typography 
                      variant="body2" 
                      color={stat.changeType === 'positive' ? 'success.main' : 'error.main'}
                    >
                      {stat.change}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  {stat.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;