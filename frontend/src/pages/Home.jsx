import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function NavBar() {
  return (
    <section>
      <body id="HomePage">
        <NavBarPages />
        <LoginSignup />
        <Carousel />
      </body>
    </section>
  );
}

export default NavBar;
