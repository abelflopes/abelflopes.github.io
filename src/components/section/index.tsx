import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Container } from "@components/container";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const Section = ({
  className,
  children,
  ...otherProps
}: Readonly<SectionProps>): React.ReactElement => {
  return (
    <section {...otherProps} className={classNames(className, styles.root)}>
      <Container>{children}</Container>
    </section>
  );
};
