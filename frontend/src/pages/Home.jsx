import NavBarPages from "../components/NavBarPage/NavBarPages";
import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <section>
      <body id="HomePage">
        <NavBarPages />
        <Carousel />
      </body>
    </section>
  );
}

export default Home;
