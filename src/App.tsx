import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import lightBackground from "./assets/bg_light.jpg";
import darkBackground from "./assets/bg_dark.png";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

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
  return (
    <>
      <div className="w-screen h-full font-mono transition-all duration-1000" style={{ backgroundImage: `url(${isDark ? darkBackground : lightBackground})`, backgroundSize: '500px' }}>
        <div className="lg:w-1/2 lg:px-0 mx-auto relative w-full px-5">
          <Header isDark={isDark} toggleTheme={toggleTheme}/>
          <div key={location.pathname} className="route-enter route-enter-active">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
