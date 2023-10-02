import styles from "./index.module.scss";
/// React
import React from "react";
// Utils
import classNames from "classnames";
// Components
import { Container } from "@components/container";

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
        <div className={styles.content}>
          <h1 className={styles.heading}>{heading}</h1>

          <div>
            {social.map((item) => (
              <span key={item.key} className={styles.social}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <img {...media} alt={media.alt} className={classNames(media.className, styles.image)} />

          {children}
        </div>
      </Container>
      <img alt="Background" src={media.src} className={styles.bg} />
    </div>
  );
};
