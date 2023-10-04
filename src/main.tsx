// Styles
import "./styles/index.scss";
// React
import React from "react";
import { createRoot } from "react-dom/client";
// Router
import { DefaultRouter } from "@router/router/Default";
// Components
import { Theme } from "@components/theme";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Theme>
      <DefaultRouter />
    </Theme>
  </React.StrictMode>,
);
