import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Section } from "@components/section";

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
    <Section {...otherProps} className={classNames(className, styles.root)} tag="footer">
      {children}

      <div className={styles.details}>{details}</div>
    </Section>
  );
};
