import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
