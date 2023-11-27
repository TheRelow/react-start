import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export enum SidebarCollapsed {
  TRUE = "true",
  FALSE = "false",
}

export interface ThemeSettings {
  theme?: Theme;
  sidebarCollapsed?: SidebarCollapsed;
}

export interface ThemeContextProps {
  themeSettings?: ThemeSettings;
  setThemeSettings?: (themeSettings: ThemeSettings) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
export const LOCAL_STORAGE_SIDEBAR_COLLAPSED_KEY = "sidebar_collapsed";
