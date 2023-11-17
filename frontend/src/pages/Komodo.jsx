import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./categorie.css";

function Komodo() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const [viewButton, setViewButton] = useState(true);
  const [numberOfImagesToDisplay, setNumberOfImagesToDisplay] = useState(25);
  const next = () => setCurrent(current + 1);
  const previous = () => setCurrent(current - 1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.jikan.moe/v4/anime?genres=15&page=${current}&limit=${numberOfImagesToDisplay}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMangas(data.data);
        setViewButton(data.pagination.has_next_page);
      });
  }, [current, numberOfImagesToDisplay]);
  useEffect(() => {
    if (window.matchMedia("(max-width: 425px)").matches) {
      setNumberOfImagesToDisplay(4);
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      setNumberOfImagesToDisplay(6);
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      setNumberOfImagesToDisplay(10);
    }
  }, []);
  return (
    <main className="PageSelection">
      <NavBarPages />
      <NavLinkPage />
      <div className="container">
        <center className="CategorieAnime">KÔMODO</center>
        <div className="resume">
          {mangas.map((manga) => {
            return (
              <div key={manga.mal_id}>
                <button
                  type="button"
                  onClick={() => navigate(`/lastPage/${manga.mal_id}`)}
                  className="manga"
                >
                  <img
                    className="imageAnime"
                    src={manga.images.jpg.image_url}
                    alt=""
                  />
                </button>
                <p className="titreAnime">{manga.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ButtonNav">
        {current <= 1 ? null : (
          <button type="button" onClick={previous}>
            <img
              className="ButtonNextPrev"
              src="../src/assets/images/NavBar/KunaiPrevTrans.png"
              alt="Button Prev"
            />
          </button>
        )}
        {viewButton ? (
          <button type="button" onClick={next}>
            <img
              className="ButtonNextPrev"
              src="../src/assets/images/NavBar/KunaiNextTrans.png"
              alt="Button Next"
            />
          </button>
        ) : null}
      </div>
    </main>
  );
}

export default Komodo;
