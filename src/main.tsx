// Styles
import "./styles/index.scss";
// React
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
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

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
