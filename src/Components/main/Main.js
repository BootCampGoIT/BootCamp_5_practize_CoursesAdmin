import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { main } from "./Main.module.css";

const Main = () => {
  return (
    <main className={main}>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route exact={exact} path={path} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
