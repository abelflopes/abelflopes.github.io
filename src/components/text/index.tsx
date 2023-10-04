import styles from "./index.module.scss";
/// React
import React, { type ReactHTML, useMemo } from "react";
// Utils
import classNames from "classnames";
import { useThemeContext } from "@components/theme/context";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  margin?: boolean;
  skin?: "banner" | "h1" | "h2" | "h3" | "p" | "small";
  children?: React.ReactNode | React.ReactNode[];
  as?: React.ReactElement;
}

export const Text = ({
  as,
  margin = true,
  skin = "p",
  className,
  children,
  ...otherProps
}: Readonly<TextProps>): React.ReactElement => {
  const theme = useThemeContext();

  const computedClassNames = useMemo(
    () =>
      classNames(
        styles.root,
        styles[skin],
        {
          [styles.margin]: margin,
          [styles.inverted]: theme.inverted,
        },
        className,
      ),
    [className, margin, skin, theme.inverted],
  );

  const tag = useMemo<keyof ReactHTML>(() => {
    let value: keyof ReactHTML;

    switch (skin) {
      case "banner": {
        value = "h1";
        break;
      }

      case "small": {
        value = "p";
        break;
      }

      default: {
        value = skin;
      }
    }

    return value;
  }, [skin]);

  const element = useMemo<React.ReactElement>(
    () =>
      as && React.isValidElement<HTMLElement>(as)
        ? React.cloneElement(
            as,
            {
              className: classNames(as.props.className, computedClassNames),
            },
            <>
              {as.props.children}
              {children}
            </>,
          )
        : React.createElement(
            tag,
            {
              ...otherProps,
              className: computedClassNames,
            },
            children,
          ),
    [as, computedClassNames, children, tag, otherProps],
  );

  return element;
};
