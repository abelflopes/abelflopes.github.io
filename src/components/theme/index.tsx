import "./index.module.scss";
/// React
import React from "react";

interface ThemeProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Theme = ({ children }: Readonly<ThemeProps>): React.ReactElement => <>{children}</>;
