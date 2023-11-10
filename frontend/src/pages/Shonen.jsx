import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import "./categorie.css";

function Shonen() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const [viewButton, setViewButton] = useState(true);
  const next = () => setCurrent(current + 1);
  const previous = () => setCurrent(current - 1);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=27`)
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data.pagination.current_page);
        setMangas(data.data);
      });
  }, []);

  useEffect(() => {
    if (current !== 1) {
      fetch(`https://api.jikan.moe/v4/anime?genres=27&page=${current}`)
        .then((res) => res.json())
        .then((data) => setMangas(data.data));

      fetch(`https://api.jikan.moe/v4/anime?genres=27&page=${current + 1}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.data.length === 0) {
            setViewButton(false);
          } else {
            setViewButton(true);
          }
        });
    }
  }, [current]);
  return (
    <main className="PageSelection">
      <NavLinkPage />
      <div>
        <center className="CategorieAnime">SHÔUNEN</center>
        <div className="resume">
          {mangas.map((manga) => {
            return (
              <div key={manga.mal_id}>
                <a href="Description">
                  <img
                    className="imageAnime"
                    src={manga.images.jpg.image_url}
                    alt=""
                  />
                </a>
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
              src="../src/assets/images/NavBar/ButtonPrev.png"
              alt="Button Prev"
            />
          </button>
        )}
        {viewButton ? (
          <button type="button" onClick={next}>
            <img
              className="ButtonNextPrev"
              src="../src/assets/images/NavBar/ButtonNext.png"
              alt="Button Next"
            />
          </button>
        ) : null}
      </div>
    </main>
  );
}

export default Shonen;
