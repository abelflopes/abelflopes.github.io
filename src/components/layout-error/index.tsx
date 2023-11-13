import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
import { Container } from "@react-ck/container";
interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({
  heading,
  description,
  children,
  className,
  ...otherProps
}: Readonly<LayoutProps>): React.ReactElement => (
  <div {...otherProps} className={classNames(className, styles.root)}>
    <Container>
      <h2>{heading}</h2>
      <p>{description}</p>

      {children}
    </Container>
  </div>
);
