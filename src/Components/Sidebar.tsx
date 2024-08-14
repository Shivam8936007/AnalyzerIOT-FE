// import React, { useState } from 'react';
// import { FaBars, FaIndustry, FaPlusCircle, FaSignOutAlt, FaThLarge } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
// import logoimg from '../assests/eiecs_logo.png';

// interface NavItem {
//   name: string;
//   icon: JSX.Element;
//   path: string;
// }

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems: NavItem[] = [
//     { name: 'Overview', icon: <FaThLarge />, path: '/panel' },
//     { name: 'Industries', icon: <FaIndustry />, path: '/industries' },
//     { name: 'Add-Industries', icon: <FaPlusCircle />, path: '/add-industries' },
//     { name: 'Logout', icon: <FaSignOutAlt />, path: '/login' },
//   ];

//   return (
//     <div className={`bg-gray-800 h-screen p-5 pt-8 ${isOpen ? 'w-[18rem]' : 'w-20'} transition-width duration-300`}>
//       <img src={logoimg} alt="Logo" className="logo1" />
//       <div className="flex justify-between items-center mb-8">
      
//         <div className="text-white text-xl font-semibold flex items-center">
          
//           <span className={`${!isOpen && 'hidden'} transition-all duration-300`}>EIE Complete Solutions</span>
//         </div>
//         <FaBars
//           className="text-white cursor-pointer"
//           onClick={toggleSidebar}
//         />
//       </div>
//       <ul className="text-white">
//         {navItems.map((item, index) => (
//           <li key={index} className="mb-6">
//             <NavLink
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 cursor-pointer ${isActive ? 'bg-gray-700' : ''}`
//               }
//               onClick={() => console.log(`${item.name} clicked`)}
//             >
//               <span className="text-xl">{item.icon}</span>
//               <span className={`ml-4 ${!isOpen && 'hidden'} transition-all duration-300`}>
//                 {item.name}
//               </span>
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

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
  const [isOpen, setIsOpen] = useState(false); // Sidebar starts closed

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Overview', icon: <FaThLarge />, path: '/panel' },
    { name: 'Industries', icon: <FaIndustry />, path: '/industries' },
    { name: 'Add-Industries', icon: <FaPlusCircle />, path: '/add-industries' },
    { name: 'Logout', icon: <FaSignOutAlt />, path: '/login' },
  ];

  return (
    <div
      className={`bg-gray-800 h-screen p-5 pt-8 transition-all duration-800 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: 'hidden' }} // Ensures content doesn’t overflow during transition
    >
      <ul className="text-white">
        <li className="mb-6 flex items-center">
          <img
            src={logoimg}
            alt="Logo"
            className={`transition-all duration-300 ease-in-out ${isOpen ? 'w-10' : 'w-8'}`} // Adjust the width
            style={{ height: 'auto' }} // Maintain aspect ratio
          />
          <span
            className={`ml-4 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ whiteSpace: 'nowrap' }}
          >
            EIE Complete Solutions
          </span>
        </li>

        {navItems.map((item, index) => (
          <li key={index} className="mb-6">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className={`ml-4 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ whiteSpace: 'nowrap' }}
              >
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
