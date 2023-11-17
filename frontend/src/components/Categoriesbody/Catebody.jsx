import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./catebody.css";
import imgseinen from "../../assets/imgseinen.png";
import imgshonen from "../../assets/imgshonen 1.png";
import imgshojo from "../../assets/imgshojo.png";
import imgkimodo from "../../assets/imgkimodo.png";
import iriyajo from "../../assets/Iriyajo.jpg";

function Catebody() {
  const navigate = useNavigate();
  const [trouve, setTrouve] = useState([]);
  const [recherche, setRecherche] = useState();
  const handleClick = () => {
    fetch(`https://api.jikan.moe/v4/anime?q=${recherche}&order_by=title`)
      .then((res) => res.json())
      .then((result) => setTrouve(result.data));
  };
  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    const selectedManga = trouve[index];
    navigate(`/lastPage/${selectedManga.mal_id}`);
  };

  return (
    <section className="catbody">
      <form className="alex">
        <div className="input-wrapper">
          <input
            placeholder="Search your anime"
            type="search"
            id={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="barre
            "
          />
          <img src={iriyajo} alt="" onClick={handleClick} className="bouton" />
        </div>
        {trouve.length > 0 && (
          <select onChange={handleSelectChange} className="listes">
            {trouve.map((manga) => (
              <option key={manga.mal_id} value={manga.title}>
                {manga.title}
              </option>
            ))}
          </select>
        )}
      </form>
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
