import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import Login from "./pages/Login";

import { NotFound } from "./pages/NotFound/NotFound";

export const RouteLogin = '/login' as const; 
export const RouterConfig:React.FC =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path={RouteLogin} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}