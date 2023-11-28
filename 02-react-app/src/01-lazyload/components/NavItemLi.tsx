import { NavLink } from "react-router-dom";

interface items {
  path: string;
  name: string;
}

export const NavItemLi = ({ path, name }: items) => {
  return (
    <li key={path}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};
