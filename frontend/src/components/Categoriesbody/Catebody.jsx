import { useNavigate } from "react-router-dom";
import "./catebody.css";
import imgseinen from "../../assets/imgseinen.jpg";
import imgshonen from "../../assets/imgshonen.jpg";
import imgshojo from "../../assets/imgshojo.jpg";
import imgkimodo from "../../assets/imgkimodo.jpg";

function Catebody() {
  const navigate = useNavigate();
  return (
    <section className="categories">
      <div className="contaih2">
        <h2 className="h2cat">CATEGORIES</h2>
      </div>
      <div className="containercat">
        <div className="groupe seinen">
          <img
            className="imgcat"
            src={imgseinen}
            alt="seinen"
            // style={{ height: "260px", maxwidth: "184px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/seinen")}
          >
            Seinen
          </button>
        </div>
        <div className="groupe shonen">
          <img
            className="imgcat"
            src={imgshonen}
            alt="shonen"
            // style={{ height: "290px", maxwidth: "230px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shonen")}
          >
            Shonen
          </button>
        </div>
        <div className="groupe shojo">
          <img
            className="imgcat"
            src={imgshojo}
            alt="shojo"
            // style={{ height: "263px", maxwidth: "202px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/shojo")}
          >
            Shojo
          </button>
        </div>
        <div className="groupe kimodo">
          <img
            className="imgcat"
            src={imgkimodo}
            alt="kimodo"
            // style={{ height: "254px", maxwidth: "259px" }}
          />
          <button
            className="buttoncateg"
            type="button"
            onClick={() => navigate("/kimodo")}
          >
            Kimodo
          </button>
        </div>
      </div>
    </section>
  );
}
export default Catebody;
