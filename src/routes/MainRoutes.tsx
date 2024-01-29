import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutMePage from "../pages/AboutMePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import FormPage from "../pages/FormPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import AdminPage from "../pages/AdminPage";
import BlogDetailPage from "../pages/BlogDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainRoutes() {
  return (
    <Routes>
      <Route
        element={
          <>
            <ScrollToTop />
            <MainLayout />
          </>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/form" element={<FormPage />} />
        {/* <Route path="/projectdetail" element={<ProjectDetailPage />} /> */}
      </Route>
      <Route path="/admin-132213" element={<AdminPage />} />
    </Routes>
  );
}

export default MainRoutes;
