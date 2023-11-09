import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./categorie.css";

function Shonen() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=27&page=17`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
  // const [categorie, setCategorie] = useState("");
  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v4/anime?page=1`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.info(data.data);
  //       const tabData = [];
  //       const dataManga = data.data;
  //       for (let i = 0; i < dataManga.length; i += 1) {
  //         for (let n = 0; n < dataManga[i].demographics.length; n += 1) {
  //           if (dataManga[i].demographics[n].name === "Shounen") {
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
        <h1 className="CategorieAnime">SHÔUNEN</h1>
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
    </body>
  );
}

export default Shonen;
