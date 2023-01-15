import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound/notFound";

export const RouterConfig:React.VFC =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}