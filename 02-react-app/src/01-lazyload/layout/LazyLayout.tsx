import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import routes from "../../routes/routes";
import { NavItemLi } from "../components/NavItemLi";

export const LazyLayout = () => {
  const routesLazy = ["lazy1", "lazy2", "lazy3"];
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        {routesLazy.map((routeLazy) => {
          return (
            <NavItemLi path={routes[0].to.concat(routeLazy)} name={routeLazy} />
          );
        })}

        {/* <li>
          <NavLink to={routes[0].to.concat('lazy1')} className={({ isActive }) => (isActive ? "nav-active" : "")}>Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to={routes[0].to.concat('lazy2')} className={({ isActive }) => (isActive ? "nav-active" : "")}>Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to={routes[0].to.concat('lazy3')} className={({ isActive }) => (isActive ? "nav-active" : "")}>Lazy 3</NavLink>
        </li> */}
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />

        {/* <Route path="/*" element={<div>Not found</div>} /> */}
        <Route
          path="*"
          element={<Navigate replace to={routes[0].to.concat("lazy1")} />}
        />
      </Routes>
    </div>
  );
};

export default LazyLayout;
