import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seinen from "./pages/Seinen";
import Shonen from "./pages/Shonen";
import Shojo from "./pages/Shojo";
import Komodo from "./pages/Komodo";
import Hentai from "./pages/Hentai";
import LastPage from "./pages/LastPage";
import Footer from "./components/Footer/Footer";
import Video from "./Video";
import "./App.css";

function App() {
  const [video, setVideo] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVideo(false);
    }, 8000);
  }, []);

  if (video) {
    return <Video />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/komodo" element={<Komodo />} />
        <Route path="/shonen" element={<Shonen />} />
        <Route path="/shojo" element={<Shojo />} />
        <Route path="/seinen" element={<Seinen />} />
        <Route path="/hentai" element={<Hentai />} />
        <Route path="/LastPage/:Id" element={<LastPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
