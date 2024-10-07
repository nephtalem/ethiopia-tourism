import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 sm:px-12 md:px-24 h-15 px-8">
      <div className="flex mx-auto justify-between items-center">
        <h1 className="font-bold text-lg text-white">
          EthioTourism
        </h1>
        <div className="text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-4 sm:mr-8 ${
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400" : "hover:text-yellow-300"}`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
