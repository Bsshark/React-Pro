import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { Link, NavLink, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";

export const LazyLayout = () => {
    const url = useLocation();
    const navigate = useNavigate();
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <Link to='/lazyload/lazy1'>Lazy 1</Link>
        </li>
        <li>
          <Link to='/lazyload/lazy2'>Lazy 2</Link>
        </li>
        <li>
          <Link to='/lazyload/lazy3'>Lazy 3</Link>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage1/>} />
        <Route path="lazy2" element={<LazyPage2/>} />
        <Route path="lazy3" element={<LazyPage3/>} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
