import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Home.css";

function NavBar() {
  return (
    <section>
      <body id="HomePage">
        <NavBarPages />
        <LoginSignup />
        <img
          className="LogoIriyajo"
          src="../src/assets/images/Iriyajo.jpg"
          alt="logo Iriyajo"
        />
      </body>
    </section>
  );
}

export default NavBar;
