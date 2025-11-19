import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Import your page components
import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Security from "./pages/Security";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Custom theme
const theme = createTheme({
  palette: {
    primary: { main: "#05845f" },
    secondary: { main: "#16a34a" },
  },
  typography: {
    fontFamily: "'Inter', Arial, sans-serif",
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          fontWeight={800}
          color="primary"
          component={Link}
          to="/"
          sx={{ textDecoration: "none" }}
        >
          Insight Hunter
        </Typography>
        <Box>
          <Button component={Link} to="/pricing" color="primary">
            Pricing
          </Button>
          <Button component={Link} to="/about" color="primary">
            About
          </Button>
          <Button component={Link} to="/faq" color="primary">
            FAQ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg" sx={{ minHeight: "80vh", py: 4 }}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Container>

    <Box py={4} textAlign="center" bgcolor="grey.50">
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Insight Hunter. All rights reserved.
        &nbsp;|&nbsp;
        <Link to="/terms">Terms</Link>
        &nbsp;|&nbsp;
        <Link to="/privacy">Privacy</Link>
      </Typography>
    </Box>
  </ThemeProvider>
);

export default App;
