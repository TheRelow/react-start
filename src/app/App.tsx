import "./styles/index.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <button onClick={toggleLang}>{t("Сменить язык")}</button>
      {t("Тестовый пример")}
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className="content">
          <Sidebar />
          <main className="main">
            <Component></Component>
            <AppRouter />
          </main>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
