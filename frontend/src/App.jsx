import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Seinen from "./pages/Seinen";
import Shonen from "./pages/Shonen";
import Shojo from "./pages/Shojo";
import Komodo from "./pages/Komodo";
import Description from "./pages/Description";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seinen" element={<Seinen />} />
        <Route path="/shonen" element={<Shonen />} />
        <Route path="/shojo" element={<Shojo />} />
        <Route path="/komodo" element={<Komodo />} />
        <Route path="/description" element={<Description />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
