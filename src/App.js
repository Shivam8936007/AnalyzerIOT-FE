import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Navbar, Sidebar } from "./Components";
import { Industries, Login } from "./Pages";
import "./App.css";

import { useStateContext } from "./Contexts/ContextProvider";

const AppContent = () => {
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="absolute inset-0 justify-center">
        <div className="bg-shape3 bg-violet-700 opacity-4 bg-blur"></div>
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
      </div>
      <div className={`flex ${!isLoginPage && "dark:bg-main-dark-bg"}`}>
        {!isLoginPage && (
          <>
            {activeMenu ? (
              <div className="dark:bg-secondary-dark-bg ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
          </>
        )}
        <div
          className={
            "flex flex-col h-screen w-full overflow-y-scroll pl-2 pr-2"
          }
        >
          {!isLoginPage && (
            <div className="fixed md:static navbar w-full p-5">
              <Navbar />
            </div>
          )}
          <div className="w-full p-5">
            <Routes>
              <Route path="/" element={<Industries />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
