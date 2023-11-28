import { NavLink } from "react-router-dom";

interface items {
  to: string,
  name: string
}

export const NavItemLi = ({to, name}: items) => {
  return (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        {name}
      </NavLink>
    </li>
  );
};
