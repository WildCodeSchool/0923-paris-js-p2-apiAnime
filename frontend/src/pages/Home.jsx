import NavBarPages from "../components/NavBarPage/NavBarPages";

import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <section>
      <main className="HomePage">
        <NavBarPages />
        <Carousel />
      </main>
    </section>
  );
}

export default Home;
