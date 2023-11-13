// Styles
import "./styles/index.scss";
// React
import React from "react";
import { createRoot } from "react-dom/client";
// Router
import { DefaultRouter } from "@router/router/Default";
// Components
import { ThemeProvider } from "@react-ck/theme";
import { Button } from "@react-ck/button";
import { Text } from "@react-ck/text";
import { Card } from "@react-ck/card";

const app = (
  <React.StrictMode>
    <ThemeProvider>
      <DefaultRouter />
    </ThemeProvider>
  </React.StrictMode>
);

const root = document.querySelector("#root");

if (root === null) throw new Error("Missing root element");

createRoot(root).render(app);
