import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../Contexts/ContextProvider";
// import eielogo from "../assets/eiecs_logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const links = [
    {
      name: 'panel',
      icon: <FiShoppingBag />,
    },
    {
      name: 'industries',
      icon: <FaIndustry />,
    },
    {
      name: 'add-industry',
      icon: <FiShoppingBag />,
    },
    {
      name: 'notification',
      icon: <FiShoppingBag />,
    },
  ];

  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 border-r border-gray-300 rounded-tr-3xl rounded-br-3xl">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            {/* <img src={eielogo} alt="EIECS Logo" className="logo1" /> */}
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-5 mt-2 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <span>EIE Complete Solutions</span>
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-10">
            {links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-violet-800 text-white text-[1rem] font-[500] m-3 cursor-pointer"
                    : "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-800 text-[1rem] font-[500] hover:bg-violet-600 hover:text-slate-200 m-3 cursor-pointer"
                }
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
