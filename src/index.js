
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Notes from "./pages/Notes";
import Tips from "./pages/Tips";
import Practice from "./pages/Practice";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter basename="/better-interpretation">
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/practice" element={<Practice />} />
        </Routes>
    </BrowserRouter>
);
