import { NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";




const NavBar = () => {


    return (
        <div className="max-w-screen-2xl bg-gradient-to-r from-[#F6D365] to-[#FDA085] navbar flex items-center justify-between px-4 lg:px-16 py-2 lg:py-6">
      <div>
        {/* <img className="w-36 lg:w-52" src={logo} alt="logo" /> */}
        <h1 className="text-3xl font-bold text-gray-600">Hello Car</h1>
      </div>
      <div className="lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost rounded-full border-2 border-gray-600"
        > 
          <FiMenu className="text-3xl text-gray-600"></FiMenu>
        </label>
      </div>

      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `text-white border-b-2 border-b-white flex items-center gap-3 font-bold text-2xl uppercase`
                  : `nav-text flex items-center gap-3 font-bold text-xl uppercase`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default NavBar;