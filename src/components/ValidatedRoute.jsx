import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { useContext } from "react";
import { LoginContext } from "../context/AuthContext";
// import Navbar from "./Navbar";
const ValidatedRoute = () => {
  const { isAuthenticated } = useContext(LoginContext);
  return !isAuthenticated ? (
    <Navigate to="/login" replace></Navigate>
  ) : (
    <Outlet></Outlet>
  );
};
export default ValidatedRoute;
