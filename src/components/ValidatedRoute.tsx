import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { LoginContext } from "../context/AuthContext";
import { AuthContextType } from "../types/auth";
// import Navbar from "./Navbar";
const ValidatedRoute : React.FC = () => {
  const { isAuthenticated } = useContext<AuthContextType>(LoginContext);
  return !isAuthenticated ? (
    <Navigate to="/login" replace></Navigate>
  ) : (
    <Outlet></Outlet>
  );
};
export default ValidatedRoute;
