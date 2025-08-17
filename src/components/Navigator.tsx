import { NavLink } from "react-router";

const links = [
  { path: "/", label: "Welcome" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navigator = () => {
  return (
    <nav className="my-2">
      <ul className="flex flex-row justify-around text-md font-semibold">
        {links.map((link) => (
          <li key={link.path} className="hover:text-blue-500 lowercase">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-gray-700"
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
