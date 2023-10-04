import styles from "./index.module.scss";
/// React
import React, { type ReactHTML } from "react";
// Utils
import classNames from "classnames";
// Components
import { Container } from "@components/container";
import { ThemeContextOverride } from "@components/theme/context";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  colorScheme?: "default" | "inverted";
  tag?: keyof ReactHTML;
  children: React.ReactNode | React.ReactNode[];
}

export const Section = ({
  colorScheme = "default",
  tag = "section",
  className,
  children,
  ...otherProps
}: Readonly<SectionProps>): React.ReactElement => {
  const element = React.createElement(
    tag,
    {
      ...otherProps,
      className: classNames(className, styles.root, {
        [styles[colorScheme]]: colorScheme !== "default",
      }),
    },
    <Container>{children}</Container>,
  );

  return (
    <ThemeContextOverride inverted={colorScheme === "inverted"}>{element}</ThemeContextOverride>
  );
};
