import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

import "./Navbar.css";
// Navigation bar (allway on top) to navigate between components
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  function clickToLogout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <header>
      <nav>
        <NavLink to="/">
          <h3>FSU UNIVERSITY</h3>
        </NavLink>
        <menu>
          <li className="navlink">
            <NavLink to="/departments">Departments</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/faculty">Faculty</NavLink>
          </li>
          {token ? (
            <li className="navlink">
              <a href="#" onClick={clickToLogout}>
                Log Out
              </a>
            </li>
          ) : (
            <li className="navlink">
              <NavLink to="/login">Log In</NavLink>
            </li>
          )}
        </menu>
      </nav>
    </header>
  );
}
