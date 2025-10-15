import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Welcome" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navigator = () => {
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
