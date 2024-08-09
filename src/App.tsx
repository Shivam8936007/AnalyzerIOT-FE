import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Sidebar } from "./Components";
import { Industries, Login, AddIndustry } from "./Pages";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";
import { RootState } from "./redux-store/store";
import Cookies from "js-cookie";

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => !!state.userData.accessToken
  );
  const token = Cookies.get("accessToken");
  const location = useLocation();

  useEffect(() => {
    if (token && !isAuthenticated) {
      // If token exists in cookies but not in state, refresh the state
      // This could involve dispatching an action to re-authenticate using the token
      // For example: dispatch(refreshAuth(token))
    }
    if (isAuthenticated && location.pathname === "/login") {
      navigate("/panel");
    }
  }, [token, isAuthenticated, navigate, location.pathname]);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="h-screen w-screen bgm">
      <div className="absolute inset-0 justify-center">
        <div className="bg-shape3 opacity-40 bg-blur"></div>
        <div className="bg-shape1 bg-teal opacity-30 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-30 bg-blur"></div>
        <div className="bg-shape1 bg-purple opacity-30 bg-blur"></div>
      </div>
      <div className={`flex ${!isLoginPage && "dark:bg-main-dark-bg"}`}>
        {!isLoginPage && isAuthenticated && (
          <div className="dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className="flex flex-col h-screen w-full overflow-y-scroll pl-2 pr-2">
          {!isLoginPage && (
            <div className="fixed md:static navbar w-full p-5">
              <Navbar />
            </div>
          )}
          <div className="w-full p-5">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/panel" element={<Industries />} />
                <Route path="/add-industry" element={<AddIndustry />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
