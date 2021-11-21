import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import { Blogs } from "./pages/Blogs";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

import "./styles/index.css";
import "./styles/bootstrap.min.css";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route>Not Found</Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
