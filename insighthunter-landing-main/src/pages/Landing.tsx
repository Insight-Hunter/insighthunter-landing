import React from 'react';
import { Typography, Button, Box, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Box textAlign="center" mb={8}>
      <Typography variant="h2" fontWeight={800} gutterBottom>
        Unlock Your Financial Edge
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Empowering business owners and freelancers with real-time, autonomous decision engines that amplify your judgment and accelerate your path to growth.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/pricing"
        sx={{ mt: 3, px: 4, py: 1.5, fontSize: '1.1rem' }}
      >
        Start Free
      </Button>
    </Box>

    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={4}>
        <Box textAlign="center" p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Instant Insights
          </Typography>
          <Typography color="text.secondary">
            Get actionable recommendations and reports in seconds, no manual work required.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign="center" p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Secure & Private
          </Typography>
          <Typography color="text.secondary">
            Bank-level encryption and privacy safeguards protect your data.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign="center" p={3}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Upgrade Anytime
          </Typography>
          <Typography color="text.secondary">
            Your data and preferences carry forward as you scale.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default Landing;
