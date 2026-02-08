import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const naviate = useNavigate();
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    naviate("/login", { replace: true });
  };
  return (
    <nav className="bg-gray-900  text-white px-6 py-3 flex justify-between">
      <h1 className="text-xl font-bold">
        <img
          src="./logo_white.png"
          className="w-auto h-10 object-contain"
        ></img>
      </h1>
      <div className="space-x-4">
        <NavLink to="/home" className="hover:text-blue-400">
          Home
        </NavLink>
        {!token && (
          <NavLink to="/login" className="hover:text-blue-400">
            Login
          </NavLink>
        )}
        {!token && (
          <NavLink to="/" className="hover:text-blue-400">
            Register
          </NavLink>
        )}
        <button onClick={logout} className="hover:text-blue-400">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
