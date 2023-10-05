import styles from "./index.module.scss";
/// React
import React from "react";
// Icons - https://react-icons.github.io/react-icons/icons?name=si
import { type IconType } from "react-icons";
import { SiLinkedin, SiCodersrank, SiNpm, SiCodepen, SiGithub } from "react-icons/si";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const icons = {
  SiLinkedin,
  SiCodersrank,
  SiNpm,
  SiCodepen,
  SiGithub,
};
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
export interface IconProps extends Omit<IconType, "size"> {
  title?: string;
  url?: string;
  name: keyof typeof icons;
}

export const Icon = ({
  name,
  title,
  url,
  ...otherProps
}: Readonly<IconProps>): React.ReactElement => {
  const Icon: IconType = icons[name] as IconType;
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
