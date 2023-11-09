import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./categorie.css";

function Shojo() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=25&page=18`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
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
    <body id="PageSelection">
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
        </div>
      </div>
    </body>
  );
}

export default Shojo;
