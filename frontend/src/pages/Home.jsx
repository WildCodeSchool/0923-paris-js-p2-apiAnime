import NavBarPages from "../components/NavBarPage/NavBarPages";
import Video from "../components/Video/Video";
import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
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
        <Carousel />
    </section>
  );
}

export default Home;
