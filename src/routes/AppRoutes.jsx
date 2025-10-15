import React from "react";
import { Routes, Route } from "react-router-dom";
import { sidebarData } from "../data/Data";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      {sidebarData.map((section) =>
        section.items.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component title={item.title} />} />
        ))
      )}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
