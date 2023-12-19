import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./assets/styles/index.css";
import { Footer } from "./components/Footer/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { Contacts } from "./templates/Contacts/index.tsx";
import { AboutMe } from "./templates/About/index.tsx";
import { Projects } from "./templates/Projects/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/works" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
