import NavBarPages from "../components/NavBarPage/NavBarPages";
import Video from "../components/Video/Video";
import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <section>
      <main className="HomePage">
        <NavBarPages />
        <Video />
        <Carousel />
      </main>
    </section>
  );
}

export default Home;
