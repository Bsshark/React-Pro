import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";
import { NavItemLi } from "../01-lazyload/components/NavItemLi";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />
              <ul>
                {routes.map((route) => {
                  return <NavItemLi to={route.to} name={route.name} />;
                })}
                {/* <li>
                <NavLink
                  to="/lazy1"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy 1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lazy2"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy 2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lazy3"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy 3
                </NavLink>
              </li> */}
              </ul>
            </nav>
            <Routes>
              {routes.map(({ path, Component: Component }) => {
                return <Route path={path} element={<Component />} />;
              })}
              {/* <Route path="lazy1" element={<LazyPage1 />} />
            <Route path="lazy2" element={<LazyPage2 />} />
            <Route path="lazy3" element={<LazyPage3 />} /> */}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};