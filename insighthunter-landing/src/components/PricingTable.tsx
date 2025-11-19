import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveIcon from "@mui/icons-material/RemoveRounded";

interface Feature {
  label: string;
  tiers: boolean[];
}

const features: Feature[] = [
  { label: "Instant financial insights & reports", tiers: [true, true, true] },
  { label: "One-click recommendations & alerts", tiers: [true, true, true] },
  { label: "Secure data connection & privacy", tiers: [true, true, true] },
  { label: "Upgrade option anytime", tiers: [true, true, true] },
  { label: "Advanced analytics & forecasting", tiers: [false, true, true] },
  {
    label: "Custom KPI tracking & historical trends",
    tiers: [false, true, true],
  },
  { label: "Automated action suggestions", tiers: [false, true, true] },
  { label: "Enhanced reporting & export", tiers: [false, true, true] },
  { label: "Email support", tiers: [false, true, true] },
  { label: "Full autonomous financial execution", tiers: [false, false, true] },
  {
    label: "Multi-user collaboration and permissions",
    tiers: [false, false, true],
  },
  { label: "Priority support & onboarding", tiers: [false, false, true] },
  { label: "API access & integrations", tiers: [false, false, true] },
  {
    label: "Dedicated advisor/consulting credits",
    tiers: [false, false, true],
  },
  {
    label: "Continuous model learning & automation",
    tiers: [false, false, true],
  },
];

const PricingTable = () => (
  <Box overflow="auto" my={4}>
    <Table>
      <TableHead>
        <TableRow>
          {["Free", "Pro", "Enterprise"].map((plan, i) => (
            <TableCell key={plan} align="center">
              <Typography variant="h6" fontWeight={700}>
                {plan}
              </Typography>
              <Typography
                fontWeight={700}
                color={i === 2 ? "primary" : "text.secondary"}
              >
                {i === 0 ? "$0" : i === 1 ? "$29/mo" : "Custom"}
              </Typography>
              {i === 2 && (
                <Chip
                  label="Most Powerful"
                  color="primary"
                  size="small"
                  sx={{ mt: 1 }}
                />
              )}
            </TableCell>
          ))}
          <TableCell align="left">
            <Typography fontWeight={700}>Feature</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.label}>
            {feature.tiers.map((yes, idx) => (
              <TableCell align="center" key={idx}>
                {yes ? (
                  <CheckIcon color="success" fontSize="medium" />
                ) : (
                  <RemoveIcon color="disabled" fontSize="medium" />
                )}
              </TableCell>
            ))}
            <TableCell align="left">
              <Typography>{feature.label}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
);

export default PricingTable;
