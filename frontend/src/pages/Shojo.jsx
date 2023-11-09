import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./categorie.css";

function Shojo() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const [viewButton, setViewButton] = useState(true);
  const next = () => setCurrent(current + 1);
  const previous = () => setCurrent(current - 1);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=18`)
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data.pagination.current_page);
        setMangas(data.data);
      });
  }, []);

  useEffect(() => {
    if (current !== 1) {
      fetch(`https://api.jikan.moe/v4/anime?genres=18&page=${current}`)
        .then((res) => res.json())
        .then((data) => setMangas(data.data));

      fetch(`https://api.jikan.moe/v4/anime?genres=18&page=${current + 1}`)
        .then((res) => res.json())
        .then((data) => {
          console.info("data", data);
          // setMangas(data.data);
          if (data.data.length === 0) {
            setViewButton(false);
          } else {
            setViewButton(true);
          }
        });
    }
  }, [current]);

  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v4/anime?page=20`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.info(data.data);
  //       const tabData = [];
  //       const dataManga = data.data;
  //       for (let i = 0; i < dataManga.length; i += 1) {
  //         for (let n = 0; n < dataManga[i].demographics.length; n += 1) {
  //           if (dataManga[i].demographics[n].name === "Shoujo") {
  //             tabData.push(dataManga[i]);
  //           }
  //         }
  //       }
  //       setMangas(tabData);
  //     });
  // }, []);
  return (
    <main className="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <LoginSignup />
      <div>
        <h1 className="CategorieAnime">SHÔUJO</h1>
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
          {current <= 1 ? null : (
            <button type="button" onClick={previous}>
              Previous
            </button>
          )}
          {viewButton ? (
            <button type="button" onClick={next}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default Shojo;
