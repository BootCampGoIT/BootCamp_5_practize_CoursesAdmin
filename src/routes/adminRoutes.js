import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/admin/adminCourses/AdminCourses" /*webpackChunkName: "AdminCourses" */
      )
    ),
  },
  {
    name: "groups",
    path: "/groups",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/admin/adminGroups/AdminGroups" /*webpackChunkName: "AdminGroups" */
      )
    ),
  },
];
