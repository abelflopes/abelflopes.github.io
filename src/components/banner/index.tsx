import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Text } from "@components/text";

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  social: React.ReactElement[];
  media: React.ImgHTMLAttributes<HTMLImageElement>;
  children: string | string[];
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
      <div className={styles.container}>
        <img {...media} alt={media.alt} className={classNames(media.className, styles.image)} />

        <Text skin="banner" className={styles.heading} margin={false}>
          {heading
            .split(" ")
            .flatMap((item, index) => (index > 0 ? [<br key={item} />, item] : item))}
        </Text>

        <Text className={styles.description}>{children}</Text>

        <div className={styles.social}>{social}</div>
      </div>

      <div className={styles.bg_container}>
        <img alt="Background" src={media.src} className={styles.bg} />
      </div>
    </div>
  );
};
