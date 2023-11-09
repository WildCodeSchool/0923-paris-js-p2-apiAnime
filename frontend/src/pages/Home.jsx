import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import Video from "../components/Video/Video";
import "./Home.css";

function NavBar() {
  return (
    <section>
      <main className="HomePage">
        <NavBarPages />
        <LoginSignup />
        <Video />
        <img
          className="LogoIriyajo"
          src="../src/assets/images/Iriyajo.jpg"
          alt="logo Iriyajo"
        />
      </main>
    </section>
  );
}

export default NavBar;
