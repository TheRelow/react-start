import "./styles/index.scss";

import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <header className="header">
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
        <button onClick={toggleTheme}>toggle light</button>
      </header>
      <main className="main">
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path={"/"} element={<MainPageAsync />}></Route>
            <Route path={"/about"} element={<AboutPageAsync />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
