import React, { FC, PropsWithChildren, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_SIDEBAR_COLLAPSED_KEY,
  LOCAL_STORAGE_THEME_KEY,
  SidebarCollapsed,
  Theme,
  ThemeContext,
  ThemeSettings,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const defaultSidebarCollapsed =
  (localStorage.getItem(
    LOCAL_STORAGE_SIDEBAR_COLLAPSED_KEY
  ) as SidebarCollapsed) || SidebarCollapsed.FALSE;

const defaultThemeSettings = {
  theme: defaultTheme,
  sidebarCollapsed: defaultSidebarCollapsed,
};

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeSettings, setThemeSettings] =
    useState<ThemeSettings>(defaultThemeSettings);
  const defaultProps = useMemo(
    () => ({
      themeSettings,
      setThemeSettings,
    }),
    [themeSettings]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
