import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900  text-white px-6 py-3 flex justify-between">
      <h1 className="text-xl font-bold">
        <img
          src="./logo_white.png"
          className="w-auto h-10 object-contain"
        ></img>
      </h1>
      <div className="space-x-4">
        <NavLink to="/" className="hover:text-blue-400">
          Home
        </NavLink>
        <NavLink to="/home" className="hover:text-blue-400">
          About
        </NavLink>
        <NavLink to="/login" className="hover:text-blue-400">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
