import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
import { Text } from "@components/text";
import { ThemeContextOverride } from "@components/theme/context";
// Components

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  link?: string;
  image: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Card = ({
  heading,
  link,
  image,
  className,
  children,
  ...otherProps
}: Readonly<CardProps>): React.ReactElement => {
  return (
    <ThemeContextOverride inverted={false}>
      <div {...otherProps} className={classNames(className, styles.root)}>
        <div className={styles.header}>
          <Text className={styles.heading} skin="h3">
            {heading}
          </Text>
          <img src={image} alt={heading} className={styles.image} />
        </div>
        <div className={styles.content}>
          {children}
          <Text
            as={
              <a href={link} target="_blank" rel="noreferrer">
                {link?.replace("https://", "").replace("www.", "")}
              </a>
            }
          />
        </div>
      </div>
    </ThemeContextOverride>
  );
};
