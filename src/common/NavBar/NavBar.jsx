import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import UserCheck from "../../views/protected/UserCheck";
import LogoutButton from "../../views/profile/Logout";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className={"nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Instructions" className={"nav-link"}>
            Instrucciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={"nav-link"}>
            Nosotros
          </NavLink>
        </li>
        <UserCheck>
          <li>
            <NavLink to="/MainPage" className={"nav-link"}>
              Main
            </NavLink>
          </li>
          <li>
            <LogoutButton className="logout-button" />
          </li>
        </UserCheck>
      </ul>
    </nav>
  );
}

export default NavBar;

