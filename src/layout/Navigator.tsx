import { LanguageContext } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const baseLinks = [
  { path: "welcome", key: "welcome" },
  { path: "blog", key: "blog" },
  { path: "about", key: "about" },
  { path: "contact", key: "contact" },
] as const;

const Navigator = () => {
  const { lang } = useContext(LanguageContext);

  const params = useParams();

  const currentLang = (params.lang as "vn" | "en") ?? lang;

  const labels = useMemo(() => {
    return currentLang === "vn"
      ? {
          welcome: "Trang chủ",
          blog: "Blog",
          about: "Giới thiệu",
          contact: "Liên hệ",
        }
      : {
          welcome: "Welcome",
          blog: "Blog",
          about: "About",
          contact: "Contact",
        };
  }, [currentLang]);

  const links = useMemo(
    () =>
      baseLinks.map((l) => ({
        path: `/${currentLang}/${l.path}`,
        label: labels[l.key],
      })),
    [currentLang, labels]
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="my-2 w-full h-8 sm:flex sm:flex-row justify-center items-center">
      <button
        className="sm:hidden"
        onClick={handleSetMenuOpen}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isMenuOpen && (
        <div
          className={`flex flex-col gap-2 px-4 py-2 fixed top-0 left-0 right-0 bottom-0 bg-[#E8E8E6]/90 dark:bg-[#423224]/90 rounded text-center z-10 w-3/4 justify-center items-center h-screen transition-all duration-1000 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div ref={menuRef} className="w-full">
            <ul className="flex flex-col w-full">
              {links.map((link) => (
                <li
                  key={link.path}
                  className="lowercase w-full"
                  onClick={handleSetMenuOpen}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-offset-4 w-full"
                        : "opacity-80 hover:opacity-100 transition-opacity w-full"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <ul className="hidden sm:flex sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-md font-semibold">
        {links.map((link) => (
          <li key={link.path} className="lowercase">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4"
                  : "opacity-80 hover:opacity-100 transition-opacity"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
