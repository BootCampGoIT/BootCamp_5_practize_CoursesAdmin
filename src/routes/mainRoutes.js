import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName: "HomePage" */)
    ),
  },
  {
    name: "courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /*webpackChunkName: "CoursesPage" */)
    ),
  },
  {
    name: "admin",
    path: "/admin",
    exact: false,
    component: lazy(() =>
      import("../pages/AdminPage" /*webpackChunkName: "AdminPage" */)
    ),
  },
  {
    name: "sign in",
    path: "/signin",
    exact: false,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName: "AuthPage" */)
    ),
  },
  {
    name: "sign up",
    path: "/signup",
    exact: false,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName: "AuthPage" */)
    ),
  },
];
