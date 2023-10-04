import React, { type PropsWithChildren, useContext, useMemo } from "react";

export interface ThemeContextProps {
  inverted: boolean;
}

export const ThemeContext = React.createContext({
  inverted: false,
});

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<PropsWithChildren & Readonly<ThemeContextProps>> = ({
  children,
  ...contextProps
}) => <ThemeContext.Provider value={contextProps}>{children}</ThemeContext.Provider>;

export const ThemeContextOverride: React.FC<
  PropsWithChildren & Readonly<Partial<ThemeContextProps>>
> = ({ children, ...overrideContextProps }) => {
  const theme = useThemeContext();

  const values = useMemo<ThemeContextProps>(
    () => ({
      ...theme,
      ...overrideContextProps,
    }),
    [overrideContextProps, theme],
  );

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
