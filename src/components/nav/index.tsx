import styles from "./index.module.scss";
/// React
import React, { useRef, useEffect } from "react";
// Utils
import classNames from "classnames";
import { Text } from "@components/text";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  sticky?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  links: Array<{
    href: string;
    text: string;
  }>;
}

export const Nav = ({
  sticky,
  className,
  children,
  links,
  ...otherProps
}: Readonly<NavProps>): React.ReactElement => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current === null || !sticky) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle(styles.sticky_active, e.isIntersecting);
      },
      {
        rootMargin: `0px 0px -${window.innerHeight}px 0px`,
        threshold: [0, 1],
      },
    );

    observer.observe(navRef.current);

    return () => {
      observer.disconnect();
    };
  }, [sticky]);

  return (
    <nav
      ref={navRef}
      {...otherProps}
      className={classNames(className, styles.root, {
        [styles.sticky]: sticky,
      })}>
      <div className={styles.container}>
        {links.map((link) => (
          <Text
            key={link.href}
            margin={false}
            as={
              <a className={styles.item} href={link.href}>
                {link.text}
              </a>
            }
          />
        ))}

        {children}
      </div>
    </nav>
  );
};
