import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.scss';
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project"
import Sidebar from "./components/Sidebar/Sidebar"
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import HomeMobile from "./components/Home/HomeMobile";

function App () {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
