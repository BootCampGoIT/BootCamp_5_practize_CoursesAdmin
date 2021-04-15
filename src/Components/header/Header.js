import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { header, list, listItem, link, activeLink } from "./Header.module.css";

const Header = ({ location }) => {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          {mainRoutes.map(({ name, path, exact }) => (
            <li className={listItem} key={path}>
              <NavLink
                exact={exact}
                to={{ pathname: path, prevPosition: location.pathname }}
                className={link}
                activeClassName={activeLink}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
