import "./index.module.scss";
/// React
import type React from "react";

interface ThemeProps {
  children: React.ReactElement;
}

export const Theme = ({ children }: Readonly<ThemeProps>): React.ReactElement => children;
