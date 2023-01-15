import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";

import { NotFound } from "./pages/NotFound/NotFound";

export const RouterConfig:React.FC =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}