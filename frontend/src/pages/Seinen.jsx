import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Seinen.css";

function Seinen() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const Previous = () => setCurrent(current - 1);
  const Next = () => setCurrent(current + 1);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genre=42`)
      .then((res) => res.json())
      .then((data) => {
        setMangas(data.data);
        setCurrent(data.pagination);
      });
  }, []);
  useEffect(() => {
    if (current !== 1) {
      fetch(`https://api.jikan.moe/v4/anime?genre=42&?page=${current}`)
        .then((res) => res.json())
        .then((data) => {
          setMangas(data.data);
        });
    }
  }, [current]);
  return (
    <main className="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <LoginSignup />
      <div>
        <h2 className="h2">la page Seinen</h2>
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

export default Seinen;
