import React from "react";
import { Container, Typography } from "@mui/material";
import PricingGrid from "/project/workspace/src/components/PricingGrid";
import PricingTable from "/project/workspace/src/components/PricingTable";

const Pricing = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h3" align="center" fontWeight={800} gutterBottom>
      Choose Your Plan
    </Typography>
    <PricingGrid />

    <Typography
      variant="h4"
      align="center"
      fontWeight={700}
      gutterBottom
      sx={{ mt: 8 }}
    >
      Feature Comparison
    </Typography>
    <PricingTable />
  </Container>
);

export default Pricing;
