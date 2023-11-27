import cls from "./SidebarCollapsedSwitcher.module.scss";

import { FC, PropsWithChildren } from "react";
import Icon from "@mdi/react";
import { mdiArrowCollapseLeft } from "@mdi/js";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";
import { SidebarCollapsed } from "app/providers/ThemeProvider/lib/ThemeContext";

interface SidebarCollapsedSwitcherProps {
  className?: string;
}

export const SidebarCollapsedSwitcher: FC<
  PropsWithChildren<SidebarCollapsedSwitcherProps>
> = ({ className }) => {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleSidebarCollapsed}
      className={classNames(
        cls.SidebarCollapsedSwitcher,
        { [cls.collapsed]: sidebarCollapsed === SidebarCollapsed.TRUE },
        [className]
      )}
    >
      <Icon path={mdiArrowCollapseLeft} size={1} />
    </Button>
  );
};
