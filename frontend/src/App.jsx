import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Seinen from "./pages/Seinen";
import Shonen from "./pages/Shonen";
import Shojo from "./pages/Shojo";
import Komodo from "./pages/Komodo";
import LastPage from "./pages/LastPage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/komodo" element={<Komodo />} />
        <Route path="/shonen" element={<Shonen />} />
        <Route path="/shojo" element={<Shojo />} />
        <Route path="/seinen" element={<Seinen />} />
        <Route path="/LastPage/:Id" element={<LastPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
