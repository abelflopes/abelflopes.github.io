import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Container } from "@react-ck/container";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
  details: React.ReactNode[];
}

export const Footer = ({
  className,
  children,
  details,
  ...otherProps
}: Readonly<FooterProps>): React.ReactElement => {
  return (
    <Container spacingY {...otherProps} className={classNames(className, styles.root)}>
      {children}

      <div className={styles.details}>{details}</div>
    </Container>
  );
};
