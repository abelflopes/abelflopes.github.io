import styles from "./index.module.scss";
/// React
import React from "react";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({ children }: Readonly<LayoutProps>): React.ReactElement => {
  return <main className={styles.root}>{children}</main>;
};
