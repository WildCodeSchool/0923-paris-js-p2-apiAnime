import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Seinen from "./pages/Seinen";
import Shonen from "./pages/Shonen";
import Shojo from "./pages/Shojo";
import Kimodo from "./pages/Kimodo";
import LastPage from "./pages/LastPage";
import Footer from "./components/Footer/Footer";
import NavBarPages from "./components/NavBarPage/NavBarPages";
import "./App.css";

function App() {
  return (
    <div>
      <NavBarPages />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seinen" element={<Seinen />} />
        <Route path="/shonen" element={<Shonen />} />
        <Route path="/shojo" element={<Shojo />} />
        <Route path="/kimodo" element={<Kimodo />} />
        <Route path="/LastPage/:Id" element={<LastPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
