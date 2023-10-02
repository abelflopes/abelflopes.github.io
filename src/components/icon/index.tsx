import styles from "./index.module.scss";
/// React
import React from "react";
// Icons - https://react-icons.github.io/react-icons/icons?name=si
import { type IconType } from "react-icons";
import * as Icons from "react-icons/si";

export interface IconProps extends Omit<IconType, "size"> {
  title?: string;
  url?: string;
  name: keyof typeof Icons;
}

export const Icon = ({
  name,
  title,
  url,
  ...otherProps
}: Readonly<IconProps>): React.ReactElement => {
  const Icon: IconType = Icons[name] as IconType;
  const IconElement = <Icon {...otherProps} title={title} size={20} />;

  const Component = url ? (
    <a href={url} title={title} target="_blank" rel="noreferrer" className={styles.root}>
      {IconElement}
    </a>
  ) : (
    IconElement
  );

  return Component;
};
