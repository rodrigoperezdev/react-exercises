import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./themes/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter></AppRouter>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
