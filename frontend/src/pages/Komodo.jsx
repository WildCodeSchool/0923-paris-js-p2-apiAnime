import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./categorie.css";

function Kimodo() {
  const [mangas, setMangas] = useState([]);
  const [current, setCurrent] = useState(1);
  const next = () => setCurrent(current + 1);
  const previous = () => setCurrent(current - 1);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=17`)
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data.pagination.current_page);
        setMangas(data.data);
      });
  }, []);

  useEffect(() => {
    if (current !== 1) {
      fetch(`https://api.jikan.moe/v4/anime?genres=42&page=${current}`)
        .then((res) => res.json())
        .then((data) => setMangas(data.data));
    }
  }, [current]);

  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v4/anime`)
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
    <body id="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <LoginSignup />
      <div>
        <h1 className="CategorieAnime">KÔMODO</h1>
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
          <button type="button" onClick={previous}>
            Previous
          </button>
          <button type="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </body>
  );
}

export default Kimodo;
