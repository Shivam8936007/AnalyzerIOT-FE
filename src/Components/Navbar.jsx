import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

import avatar from "../Data/avatar.jpg";
import { useStateContext } from "../Contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="p-1">
      <div className="p-2 rounded-3xl border border-gray-300 flex justify-between relative ">
        <NavButton
          title="Menu"
          customFunc={handleActiveMenu}
          color={currentColor}
          icon={<AiOutlineMenu className="text-violet-900"/>}
        />
        <div className="flex justify-center items-center gap-2">
          <IoSettings className="w-6 h-6 text-violet-900" />
          <IoMdNotifications className="w-6 h-6 text-violet-900" />
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
              onClick={() => handleClick("userProfile")}
            >
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <p>
                <span className="text-gray-700 text-14">Hi,</span>{" "}
                <span className="text-gray-700 font-bold ml-1 text-14">
                  Abhinav
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
