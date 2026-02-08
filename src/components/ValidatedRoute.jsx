import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Navbar from "./Navbar";
const ValidatedRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Login></Login>;
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default ValidatedRoute;
