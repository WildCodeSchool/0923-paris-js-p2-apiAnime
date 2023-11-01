import NavBar from "./components/NavBar/NavBar";
import ComponentSeinen from "./components/ComponentSeinen";
import Footer from "./components/Footer/Footer";
import "./App.css";
import LoginSignup from "./components/NavBar/LoginSignup";

function App() {
  return (
    <>
      <NavBar />
      <LoginSignup />
      <ComponentSeinen />
      <Footer />
    </>
  );
}
export default App;
