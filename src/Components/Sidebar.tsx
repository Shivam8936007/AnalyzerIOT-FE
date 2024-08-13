import React, { useState } from 'react';
import { FaBars, FaIndustry, FaPlusCircle, FaSignOutAlt, FaThLarge } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logoimg from '../assests/eiecs_logo.png';

interface NavItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems: NavItem[] = [
    { name: 'Overview', icon: <FaThLarge />, path: '/panel' },
    { name: 'Industries', icon: <FaIndustry />, path: '/industries' },
    { name: 'Add-Industries', icon: <FaPlusCircle />, path: '/add-industries' },
    { name: 'Logout', icon: <FaSignOutAlt />, path: '/login' },
  ];

  return (
    <div className={`bg-gray-800 h-screen p-5 pt-8 ${isOpen ? 'w-[18rem]' : 'w-20'} transition-width duration-300`}>
      <img src={logoimg} alt="Logo" className="logo1" />
      <div className="flex justify-between items-center mb-8">
      
        <div className="text-white text-xl font-semibold flex items-center">
          
          <span className={`${!isOpen && 'hidden'} transition-all duration-300`}>EIE Complete Solutions</span>
        </div>
        <FaBars
          className="text-white cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <ul className="text-white">
        {navItems.map((item, index) => (
          <li key={index} className="mb-6">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 cursor-pointer ${isActive ? 'bg-gray-700' : ''}`
              }
              onClick={() => console.log(`${item.name} clicked`)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`ml-4 ${!isOpen && 'hidden'} transition-all duration-300`}>
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
