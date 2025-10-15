import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const location = useLocation();
  const authRoutes = ["/login", "/signup"];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <>
      {isAuthPage ? (
        <AppRoutes />
      ) : (
        <div className="dashboard">
          <Sidebar isOpen={isSidebarOpen}  toggleSidebar={toggleSidebar}/>
          {isSidebarOpen && window.innerWidth < 992 && (
            <div
              className="sidebar-backdrop"
              onClick={toggleSidebar}
            ></div>
          )}
          <main className={`main-content ${isSidebarOpen ? "open" : "closed"}`}>
            <Header toggleSidebar={toggleSidebar} />
            <div className="page-container">
              <AppRoutes />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
