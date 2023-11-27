import cls from "./Sidebar.module.scss";

import { FC, PropsWithChildren, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useTheme } from "app/providers/ThemeProvider";
import { SidebarCollapsedSwitcher } from "shared/ui/SidebarCollapsedSwitcher";
import { SidebarCollapsed } from "app/providers/ThemeProvider/lib/ThemeContext";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({ className }) => {
  const { sidebarCollapsed } = useTheme();

  return (
    <div
      className={classNames(
        cls.Sidebar,
        { [cls.collapsed]: sidebarCollapsed === SidebarCollapsed.TRUE },
        [className]
      )}
    >
      <div></div>
      <div className={cls.Sidebar__bottom}>
        <ThemeSwitcher />
        <SidebarCollapsedSwitcher></SidebarCollapsedSwitcher>
      </div>
    </div>
  );
};
