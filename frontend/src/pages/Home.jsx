import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPageHome from "../components/NavBarPage/NavBarPageHome";
import "./home.css";

function Home() {
  return (
    <section>
      <body id="HomePage">
        <NavBarPageHome />
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

export default Home;
