import React, { use } from "react";
import { AuthContext } from "../utils/AuthContext";
import { Navigate, useLocation } from "react-router";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = use(AuthContext);
  if (!user) {
return <Navigate to={'/login'} state={location.pathname}></Navigate>
  }
  return children;
};

export default PrivateRoute;
