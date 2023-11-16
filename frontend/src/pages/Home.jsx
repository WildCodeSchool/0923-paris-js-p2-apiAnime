import NavBarPages from "../components/NavBarPage/NavBarPages";
import Catebody from "../components/Categoriesbody/Catebody";
import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <section>
      <main className="HomePage">
        <NavBarPages />
        <Carousel />
        <Catebody />
      </main>
    </section>
  );
}

export default Home;
