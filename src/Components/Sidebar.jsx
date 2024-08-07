import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../Data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();


  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <=900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-violet-800 text-white text-[1rem] font-[500] m-3 ';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-800 text-[1rem] font-[500] hover:bg-violet-600 hover:text-slate-200 m-3 ';

  return (
    // <div className="back_transparent p-1 rounded-tr-3xl rounded-br-3xl">
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 border-r border-gray-300 rounded-tr-3xl rounded-br-3xl">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>EIE Complete Solutions</span>
            </Link>
            {/* <TooltipComponent content="Menu" position="BottomCenter"> */}
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            {/* </TooltipComponent> */}
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.name} className="cursor-pointer">
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    // </div>
  );
};

export default Sidebar;
