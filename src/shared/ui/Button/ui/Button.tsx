import cls from "./Button.module.scss";

import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[`theme_${theme}`]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
