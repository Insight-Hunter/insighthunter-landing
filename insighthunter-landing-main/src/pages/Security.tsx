import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Security = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" align="center" fontWeight={800} gutterBottom>
      Security & Privacy
    </Typography>
    <Box mt={4}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Your Data, Protected
      </Typography>
      <Typography paragraph>
        We take your data security and privacy seriously. Insight Hunter protects every connection with bank-level encryption and best-in-class security practices.
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Our Privacy Commitment
      </Typography>
      <Typography paragraph>
        Your data is never sold or shared. Only you—and people you choose—can access your analysis and reports.
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
        Compliance & Standards
      </Typography>
      <Typography paragraph>
        We comply with industry standards and regulations to ensure your information is always safe and secure.
      </Typography>
    </Box>
  </Container>
);

export default Security
