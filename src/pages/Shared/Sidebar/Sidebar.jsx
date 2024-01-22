import { NavLink } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-20 w-80 min-h-full bg-slate-100">
        {/* Sidebar content here */}
        <div className="flex justify-end"></div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-[#EF4040] w-full rounded-lg border-b-2 border-b-[#EF4040] flex items-center justify-center gap-3 font-bold uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold uppercase`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? `text-[#EF4040] w-full rounded-lg border-b-2 border-b-[#EF4040] flex items-center justify-center gap-3 font-bold text-lg uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold uppercase`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `text-[#EF4040] w-full rounded-lg border-b-2 border-b-[#EF4040] flex items-center justify-center gap-3 font-bold 
                 uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold uppercase`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? `text-[#EF4040] w-full rounded-lg border-b-2 border-b-[#EF4040] flex items-center justify-center gap-3 font-bold uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold uppercase`
            }
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `text-[#EF4040] w-full rounded-lg border-b-2 border-b-[#EF4040] flex items-center justify-center gap-3 font-bold uppercase`
                : `nav-text flex items-center justify-center gap-3 font-bold uppercase`
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
