import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({
  className,
  children,
  ...otherProps
}: Readonly<ContainerProps>): React.ReactElement => {
  return (
    <div {...otherProps} className={classNames(className, styles.root)}>
      {children}
    </div>
  );
};
