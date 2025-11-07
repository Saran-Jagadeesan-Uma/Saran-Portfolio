import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ResumePortal from "./pages/ResumePortal";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Saran-Portfolio/"}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<ResumePortal />} />
    </Routes>
  </BrowserRouter>
);
