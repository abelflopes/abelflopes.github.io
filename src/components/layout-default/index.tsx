import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const Layout = ({
  className,
  children,
  ...otherProps
}: Readonly<LayoutProps>): React.ReactElement => {
  return (
    <div {...otherProps} className={classNames(className, styles.root)}>
      {children}
    </div>
  );
};
