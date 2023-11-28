
import logo from "../logo.svg";
import { NavItemLi } from "../01-lazyload/components/NavItemLi";
import { Suspense } from "react";
import routes from "./routes";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />
              <ul>
                {routes.map(({ to, name }) => {
                  return <NavItemLi path={to} name={name} />;
                })} 
                {/* {routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))} */}
              </ul>
            </nav>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
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

export default Navigation;
