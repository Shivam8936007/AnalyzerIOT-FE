import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Navbar, Sidebar } from "./Components";
import { Industries, Login, AddIndustry, IndustryDetail } from "./Pages";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import { Toaster } from "react-hot-toast";

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const location = useLocation();

  useEffect(() => {
    // if (token && !isAuthenticated) {
    // }
    // if (location.pathname === "/login") {
    //   navigate("/panel");
    // }
  }, [token, navigate, location.pathname]);

  const isLoginPage = location.pathname === "/login";

  return (
    // <div className="h-screen w-screen">
    //     <div className="absolute inset-0 justify-center">
    //     <div className="bg-shape3 opacity-40 bg-blur"></div>
    //     <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
    //     <div className="bg-shape2 bg-primary opacity-30 bg-blur"></div>
    //     <div className="bg-shape1 bg-purple opacity-30 bg-blur"></div>
    //   </div>
    <div className={`flex ${!isLoginPage && "dark:bg-main-dark-bg"}`}>
      {!isLoginPage && (
        <div className="dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div className="flex flex-col h-screen w-full overflow-y-scroll pl-2 pr-2">
        {!isLoginPage && (
          <div className="fixed md:static navbar w-full p-5">
            {/* <Navbar /> */}
          </div>
        )}
        <div className="w-full p-5">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/panel" element={<Industries />} />
              <Route path="/add-industries" element={<AddIndustry />} />
              <Route path="/industry/:id" element={<IndustryDetail />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
    <Toaster position="top-center" reverseOrder={false} />
  </BrowserRouter>
);

export default App;
