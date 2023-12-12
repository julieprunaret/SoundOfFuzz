import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Videos from "./pages/Lives copy";
import Lives from "./pages/Lives";
import Header from "./components/Organisms/Header/header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/lives" element={<Lives />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
