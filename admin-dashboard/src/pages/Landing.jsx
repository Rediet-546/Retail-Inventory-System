import { Box, Button, Container, Grid, Typography, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { assets } from '../assets/assets'; // Import your assets

const Landing = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${assets.backgroundImage})`,
        backgroundSize: 'contain',        // change size
        backgroundPosition: '500px center', // align right
        backgroundRepeat: 'no-repeat',     // avoid tiling
        backgroundAttachment: 'fixed',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(1200px 600px at 75% 40%, rgba(212,175,55,0.22), rgba(0,0,0,0.6)), linear-gradient(135deg)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
           <Typography
  variant="h2"
  component="h1"
  gutterBottom
  sx={{ fontWeight: 800, lineHeight: 1.05 }}
>
  <Box component="span" sx={{ color: '#0000FF' }}>Welcome</Box>{' '}
  <Box component="span" sx={{ color: '#0000FF' }}>to the</Box>
  <br />
  <Box component="span" sx={{ color: '#0000FF' }}>Retail Inventory</Box>
  <br />
  System
</Typography>

            <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, color: '#000000' }}>
              Manage users, track sales, generate reports, and configure settings in one modern dashboard.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                sx={{
                  bgcolor: '#0000FF',
                  text:'#000000',
                  '&:hover': { bgcolor: '#0000FF' },
                }}
                size="large"
              >
                Login
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 6,
                overflow: 'hidden',
                backgroundColor: 'transparent',
                border: '2px solid rgba(0,0,0,0)',
              }}
            >
             
              
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;