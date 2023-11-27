import {
  LOCAL_STORAGE_SIDEBAR_COLLAPSED_KEY,
  LOCAL_STORAGE_THEME_KEY,
  SidebarCollapsed,
  Theme,
  ThemeContext,
} from "./ThemeContext";
import { useContext } from "react";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
  sidebarCollapsed: SidebarCollapsed;
  toggleSidebarCollapsed: () => void;
}

export function useTheme(): UseThemeResult {
  const { themeSettings, setThemeSettings } = useContext(ThemeContext);
  const { theme, sidebarCollapsed } = themeSettings;

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setThemeSettings({ ...themeSettings, theme: newTheme });
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  const toggleSidebarCollapsed = () => {
    const newValue =
      sidebarCollapsed === SidebarCollapsed.FALSE
        ? SidebarCollapsed.TRUE
        : SidebarCollapsed.FALSE;
    setThemeSettings({ ...themeSettings, sidebarCollapsed: newValue });
    localStorage.setItem(LOCAL_STORAGE_SIDEBAR_COLLAPSED_KEY, newValue);
  };

  return { theme, sidebarCollapsed, toggleTheme, toggleSidebarCollapsed };
}
