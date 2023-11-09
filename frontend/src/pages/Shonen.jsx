import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Seinen.css";

function Shonen() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const Previous = () => setCurrent(current - 1);
  const Next = () => setCurrent(current + 1);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
  return (
    <main className="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <div>
        {mangas.map((manga) => {
          return (
            <div key={manga.mal_id}>
              <button
                type="button"
                onClick={() => navigate(`/Lastpage/${manga.mal_id}`)}
              >
                <p> titre: {manga.title}</p>
                <img src={manga.images.jpg.image_url} alt="" />
                <p> titre: {manga.title}</p>
                <p> type: {manga.type}</p>
                <p> score: {manga.score}</p>
              </button>
            </div>
          );
        })}
        <button type="button" onClick={Previous}>
          Previous
        </button>
        <button type="button" onClick={Next}>
          Next
        </button>
      </div>
    </main>
  );
}

export default Shonen;
