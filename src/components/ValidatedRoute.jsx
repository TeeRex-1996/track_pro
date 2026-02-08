import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
// import Navbar from "./Navbar";
const ValidatedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace></Navigate>;
  return (
    <div>
      <header>{/* <Navbar token={token}></Navbar> */}</header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default ValidatedRoute;
