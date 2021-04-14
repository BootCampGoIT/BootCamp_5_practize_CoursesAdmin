import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { header, list, listItem, link, activeLink } from "./Header.module.css";

const Header = ({ location }) => {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li className={listItem}>
            <NavLink
              exact
              to={{ pathname: "/", prevPosition: location.pathname }}
              className={link}
              activeClassName={activeLink}>
              Home
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              to={{ pathname: "/courses", prevPosition: location.pathname }}
              className={link}
              activeClassName={activeLink}>
              Courses
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              to={{ pathname: "/admin", prevPosition: location.pathname }}
              className={link}
              activeClassName={activeLink}>
              Admin
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink to='/signin' className={link} activeClassName={activeLink}>
              Sign in
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink to='/signup' className={link} activeClassName={activeLink}>
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
