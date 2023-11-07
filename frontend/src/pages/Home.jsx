import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Home.css";

function Home() {
  return (
    <section>
      <header id="HomePage">
        <NavBarPages />
        <LoginSignup />
      </header>
    </section>
  );
}

export default Home;
