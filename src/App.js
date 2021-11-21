import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IsLoading } from "./components/IsLoading";
import { LandingPage } from "./pages/LandingPage";
import { Blogs } from "./pages/Blogs";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Page404 } from "./pages/404";

import "./styles/index.css";
import "./styles/bootstrap.min.css";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://patilkrunal.herokuapp.com/api/all/?format=json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  // if (isLoading) {
  //   return <IsLoading />;
  // } else {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" exact={true} element={<Page404 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
  // }
};

export default App;
