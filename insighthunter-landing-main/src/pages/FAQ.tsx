import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Is Insight Hunter a replacement for a CFO?",
    answer:
      "No. Insight Hunter augments your expertise, supporting recommendations while you make every decision.",
  },
  {
    question: "Do I need technical skills to use Insight Hunter?",
    answer:
      "No. Connection, setup, and using insights are built to be easy and accessible for everyone.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes—bank-level encryption and strict privacy safeguards protect your information.",
  },
  {
    question: "Can I upgrade to the full version?",
    answer: "Absolutely—your data and settings transfer seamlessly anytime.",
  },
  {
    question: "How does the free tier work?",
    answer:
      "The free tier includes basic insights, one dashboard, and community support. Upgrade anytime for more features.",
  },
];

const FAQ = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h3" align="center" fontWeight={800} gutterBottom>
      Frequently Asked Questions
    </Typography>
    <Box mt={4}>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" fontWeight={600}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  </Container>
);

export default FAQ;
