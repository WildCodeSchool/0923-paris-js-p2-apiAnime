import NavBarPages from "../components/NavBarPage/NavBarPages";
import Carousel from "../components/Carousel/Carousel";
import CateBody from "../components/Categoriesbody/Catebody";
import chaine1 from "../assets/chaine1.png";
import chaine2 from "../assets/chaine2.png";
import popjaune from "../assets/popjaune.png";
import Truncks from "../assets/trunk.png";
import Sakura from "../assets/SakuraPop.png";
import "./Home.css";

function Home() {
  return (
    <section>
      <main className="HomePage">
        <NavBarPages />
        <div className="chain">
          <img className="chaine1" src={chaine1} alt="seinen" />
          <div className="popEcran">
            <img className="popsakura" src={Sakura} alt="seinen" />
            <img className="popjaune" src={popjaune} alt="seinen" />
            <img className="poptruncks" src={Truncks} alt="seinen" />
          </div>
          <img className="chaine2" src={chaine2} alt="seinen" />
        </div>
        <div className="carrouu">
          <Carousel />
        </div>
        <CateBody />
      </main>
    </section>
  );
}

export default Home;
