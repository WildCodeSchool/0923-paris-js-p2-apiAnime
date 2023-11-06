import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Seinen from "./pages/seinen/Seinen";
import Shonen from "./pages/Shonen";
import Shojo from "./pages/Shojo";
import Kimodo from "./pages/Kimodo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seinen" element={<Seinen />} />
        <Route path="/shonen" element={<Shonen />} />
        <Route path="/shojo" element={<Shojo />} />
        <Route path="/kimodo" element={<Kimodo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
