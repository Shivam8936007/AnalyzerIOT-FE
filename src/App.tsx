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
    <div
      className={`dashboard_bg flex min-h-screen overflow-hidden`}
    >
      <Sidebar />
      <div
        className={
          "h-screen flex flex-1 flex-col mb-2 mr-5 p-5 overflow-y-auto"
        }
      >
        <Navbar />
        <main className={"flex items-center ml-5"}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/panel" element={<Industries />} />
              <Route path="/add-industries" element={<AddIndustry />} />
              <Route path="/industry/:id" element={<IndustryDetail />} />
            </Route>
          </Routes>
        </main>
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
