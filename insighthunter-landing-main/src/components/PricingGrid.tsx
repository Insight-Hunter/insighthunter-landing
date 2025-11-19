import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  Button,
  Typography,
} from '@mui/material';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    features: ['1 dashboard', 'Community support', 'Basic analytics'],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['Unlimited dashboards', 'AI insights', 'PDF exports', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['SSO & RBAC', 'Dedicated onboarding', 'Custom integrations', 'White-label reports'],
  },
];

const PricingGrid = () => (
  <Grid container spacing={4} justifyContent="center">
    {plans.map((plan, index) => (
      <Grid item xs={12} md={4} key={plan.name}>
        <Card elevation={index === 1 ? 10 : 3}>
          <CardContent>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              {plan.name}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {plan.price}
            </Typography>
            <List>
              {plan.features.map((feature) => (
                <ListItem key={feature} sx={{ px: 0 }}>
                  {feature}
                </ListItem>
              ))}
            </List>
            <Button
              variant={index === 1 ? 'contained' : 'outlined'}
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default PricingGrid;
