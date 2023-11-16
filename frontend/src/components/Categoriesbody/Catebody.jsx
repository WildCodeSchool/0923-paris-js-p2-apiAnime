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
          <img
            className="imgcat"
            src={imgkimodo}
            alt="komodo"
            // style={{ height: "260px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/komodo")}
          >
            Komodo
          </button>
        </div>
        <div className="groupe shonen">
          <img
            className="imgcat"
            src={imgshonen}
            alt="shonen"
            // style={{ height: "220px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shonen")}
          >
            Shounen
          </button>
        </div>
        <div className="groupe shojo">
          <img
            className="imgcat"
            src={imgshojo}
            alt="shojo"
            // style={{ height: "263px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shojo")}
          >
            Shoujo
          </button>
        </div>
        <div className="groupe kimodo">
          <img
            className="imgcat"
            src={imgseinen}
            alt="seinen"
            // style={{ height: "254px", maxwidth: "259px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/seinen")}
          >
            Seinen
          </button>
        </div>
      </div>
    </section>
  );
}
export default Catebody;
