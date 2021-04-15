import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/admin/AdminCourses" /*webpackChunkName: "AdminCourses" */
      )
    ),
  },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/admin/AdminGroups" /*webpackChunkName: "AdminGroups" */
      )
    ),
  },
];
