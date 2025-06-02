import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from '../routes/PrivateRoute'
import JobApply from "../components/JobApply";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement : <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        Component:<PrivateRoute>
          <JobApply/>
        </PrivateRoute>
      },
    ],
  },
]);
