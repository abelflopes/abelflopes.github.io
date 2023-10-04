import styles from "./index.module.scss";
/// React
import React from "react";
// Components
import classNames from "classnames";

interface SeparatorProps {
  margin?: boolean;
}

export const Separator = ({ margin = true }: Readonly<SeparatorProps>): React.ReactElement => {
  return (
    <hr
      className={classNames(styles.root, {
        [styles.margin]: margin,
      })}
    />
  );
};
