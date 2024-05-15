import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import App from "./App.tsx";
import { Footer, Header } from "./components";
import { AboutMe } from "./templates/About";
import { Contacts } from "./templates/Contacts";
import { Projects } from "./templates/Projects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
