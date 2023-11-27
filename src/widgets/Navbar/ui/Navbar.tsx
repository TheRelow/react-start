import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC, PropsWithChildren } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        {t("Главная")}
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        {t("О сайте")}
      </AppLink>
    </header>
  );
};
