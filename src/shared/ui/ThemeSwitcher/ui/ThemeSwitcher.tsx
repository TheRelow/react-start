import cls from "./ThemeSwitcher.module.scss";

import { FC, PropsWithChildren } from "react";
import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<PropsWithChildren<ThemeSwitcherProps>> = ({
  className,
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      <Icon path={mdiThemeLightDark} size={1} />
    </Button>
  );
};
