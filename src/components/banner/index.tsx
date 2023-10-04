import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Container } from "@components/container";
import { Text } from "@components/text";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  social: React.ReactElement[];
  media: React.ImgHTMLAttributes<HTMLImageElement>;
  children: React.ReactNode | React.ReactNode[];
}

export const Banner = ({
  heading,
  children,
  social,
  media,
  className,
  ...otherPRops
}: Readonly<BannerProps>): React.ReactElement => {
  return (
    <div {...otherPRops} className={classNames(className, styles.root)}>
      <Container className={styles.container}>
        <div className={styles.header}>
          <img {...media} alt={media.alt} className={classNames(media.className, styles.image)} />

          <Text skin="banner" className={styles.heading} margin={false}>
            {heading}
          </Text>
        </div>

        {children}

        <div className={styles.social}>{social}</div>
      </Container>
      <img alt="Background" src={media.src} className={styles.bg} />
    </div>
  );
};
