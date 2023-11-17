import { useNavigate } from "react-router-dom";
import "./catebody.css";
import imgseinen from "../../assets/imgseinen.png";
import imgshonen from "../../assets/imgshonen 1.png";
import imgshojo from "../../assets/imgshojo.png";
import imgkimodo from "../../assets/imgkimodo.png";

function Catebody() {
  const navigate = useNavigate();
  return (
    <section className="catbody">
      <div className="contaih2">
        <h2 className="h2cat">CATEGORIES</h2>
      </div>
      <div className="containercat">
        <div className="groupe seinen">
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/komodo")}
          >
            <img className="imgcat" src={imgkimodo} alt="komodo" />
            Komodo
          </button>
        </div>
        <div className="groupe shonen">
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shonen")}
          >
            <img className="imgcat" src={imgshonen} alt="shonen" />
            Shounen
          </button>
        </div>
        <div className="groupe shojo">
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shojo")}
          >
            <img className="imgcat" src={imgshojo} alt="shojo" />
            Shoujo
          </button>
        </div>
        <div className="groupe kimodo">
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/seinen")}
          >
            <img className="imgcat" src={imgseinen} alt="seinen" />
            Seinen
          </button>
        </div>
      </div>
    </section>
  );
}
export default Catebody;
