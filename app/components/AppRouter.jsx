import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar/Navbar.jsx";
import Authorization from "../pages/Authorization.jsx";
import Registration from "../pages/Registration.jsx";
import UserPage from "../pages/UserPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Navbar {...props} />
      <Routes>
        <Route path="/authorization" element={<Authorization {...props} />} />
        <Route path="/adminpage" element={<AdminPage {...props} />} />
        <Route path="/registration" element={<Registration {...props} />} />
        <Route path="/userpage" element={<UserPage {...props} />} />
        <Route
          path="*"
          element={
            <div>
              <UserPage {...props} />
              <Outlet />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
