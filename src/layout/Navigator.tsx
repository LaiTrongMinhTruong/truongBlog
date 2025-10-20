import { NavLink, useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import { LanguageContext } from "@/context/LanguageContext";

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
      ? { welcome: "Trang chủ", blog: "Blog", about: "Giới thiệu", contact: "Liên hệ" }
      : { welcome: "Welcome", blog: "Blog", about: "About", contact: "Contact" };
  }, [currentLang]);
  const links = useMemo(
    () => baseLinks.map((l) => ({ path: `/${currentLang}/${l.path}`, label: labels[l.key] })),
    [currentLang, labels]
  );
  return (
    <nav className="my-2 w-full">
      <ul className="flex flex-row flex-wrap items-center justify-center gap-6 text-md font-semibold">
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
