import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Publications from "./components/Publications/Publications";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";

import Login from "./components/Auth/Login";
import Portal from "./components/Portal/Portal";
import TuneDrop from "./components/TuneDrop/TuneDrop";
import Stories from "./components/Stories/Stories";
import StoryDetail from "./components/Stories/StoryDetail";
import NotFound from "./components/NotFound";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

const isolatedRoutes = ["/portal"];

function AppRoutes() {
  const location = useLocation();
  const isIsolated = isolatedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!isIsolated && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/tunedrop" element={<TuneDrop />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:slug" element={<StoryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isIsolated && <Footer />}
    </>
  );
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <AppRoutes />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
