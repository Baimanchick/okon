import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutMePage from "../pages/AboutMePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import FormPage from "../pages/FormPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
