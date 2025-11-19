import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

// Custom theme optional
const theme = createTheme({
  palette: {
    primary: { main: "#05845f" },
    secondary: { main: "#16a34a" }
  },
  typography: {
    fontFamily: "'Inter', Arial, sans-serif"
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
