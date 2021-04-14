import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import AuthPage from "../../pages/AuthPage";
import CoursesPage from "../../pages/CoursesPage";
import HomePage from "../../pages/HomePage";
import ModuleDescription from "../courses/moduleDescription/ModuleDescription";
import { main } from "./Main.module.css";

const Main = () => {
  return (
    <main className={main}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/courses/:courseName/:moduleId' component={ModuleDescription} /> */}
        <Route path='/courses' component={CoursesPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/signin' component={AuthPage} />
        <Route path='/signup' component={AuthPage} />
      </Switch>
    </main>
  );
};

export default Main;
