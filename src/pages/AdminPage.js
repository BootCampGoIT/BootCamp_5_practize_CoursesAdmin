import React, { Suspense, Component } from "react";
import { adminRoutes } from "../routes/adminRoutes";
import { NavLink, Switch, Route } from "react-router-dom";

class AdminPage extends Component {
  state = {};

  componentDidMount() {
    this.props.history.push(`${this.props.match.url}${adminRoutes[0].path}`);
  }
  render() {
    const { match } = this.props;
    return (
      <>
        <ul className='navigationList'>
          {adminRoutes.map(({ name, path, exact }) => (
            <li className='navigationListItem' key={path}>
              <NavLink to={`${match.url}${path}`} exact={exact}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {adminRoutes.map(({ path, exact, component }) => (
              <Route
                path={`${match.url}${path}`}
                exact={exact}
                component={component}
                key={path}
              />
            ))}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default AdminPage;
