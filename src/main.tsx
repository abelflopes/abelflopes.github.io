// Styles
import "./styles/index.scss";
// React
import React from "react";
import { createRoot } from "react-dom/client";
// Router
import { DefaultRouter } from "@router/router/Default";
// Components
import { Theme } from "@components/theme";

const app = (
  <React.StrictMode>
    <Theme>
      <DefaultRouter />
    </Theme>
  </React.StrictMode>
);

const root = document.querySelector("#root");

if (root === null) throw new Error("Missing root element");

createRoot(root).render(app);
