import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Seinen.css";

function Seinen() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?genres=27`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
  return (
    <body id="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <div>
        <h2 className="h2">la page Seinen</h2>
        <div className="resume">
          {mangas.map((manga) => {
            return (
              <div key={manga.mal_id}>
                <img src={manga.images.jpg.image_url} alt="" />
                {/* {manga.demographics.map((item) => {
                  return (
                    <div key={item.name}>
                      {item.name === "Seinen" && (
                        <div>
                          <p> titre: {manga.title}</p>
                          <img src={manga.images.jpg.image_url} alt="" />
                          <p> titre: {manga.title}</p>
                          <p> type: {manga.type}</p>
                          <p> score: {manga.score}</p>
                        </div>
                      )}
                    </div>
                  );
                })} */}
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}

export default Seinen;
