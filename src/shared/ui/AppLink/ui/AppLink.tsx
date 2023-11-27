import cls from "./AppLink.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const { className, children, to, theme, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [
        className,
        cls[`theme_${theme}`],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
