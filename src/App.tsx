import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Outlet, useParams, Navigate, useLocation } from "react-router-dom";
import lightBackground from "./assets/bg_light.jpg";
import darkBackground from "./assets/bg_dark.png";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { isSupportedLang, type SupportedLang } from "./lib/utils";
import { LanguageContext } from "./context/LanguageContext";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const location = useLocation();
  const params = useParams();
  const rawLang = params.lang as string | undefined;
  const lang: SupportedLang = isSupportedLang(rawLang) ? rawLang : "vn";
  const [isDark, setIsDark] = useState(false);
  const [currentLang, setCurrentLang] = useState<SupportedLang>(lang);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const shouldDark = stored ? stored === "dark" : false;
    setIsDark(shouldDark);
    root.classList.toggle("dark", shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const langContextValue = useMemo(() => ({ lang: currentLang, setLang: setCurrentLang }), [currentLang]);

  if (!isSupportedLang(rawLang)) {
    return <Navigate to={`/${currentLang}`} replace />;
  }

  return (
    <>
      <LanguageContext.Provider value={langContextValue}>
        <div className="w-screen min-h-screen font-mono lowercase transition-all duration-1000" style={{ backgroundImage: `url(${isDark ? darkBackground : lightBackground})`, backgroundSize: '500px' }}>
          <div className="lg:w-1/2 xl:w-2/5 lg:px-0 mx-auto relative w-full px-4 sm:px-6 md:px-8">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <div key={location.pathname} className="route-enter route-enter-active">
              <Outlet />
            </div>
            <Footer />
          </div>
          <ScrollToTopButton />
        </div>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
