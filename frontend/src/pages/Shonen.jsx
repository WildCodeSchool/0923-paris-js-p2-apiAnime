import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./Seinen.css";

function Shonen() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
  return (
    <body id="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <div>
        <h2 className="h2">la page Shounen</h2>
        <div>
          {mangas.map((manga) => {
            return (
              <div key={manga.mal_id}>
                {manga.demographics.map((item) => {
                  return (
                    <div key={item.name}>
                      {item.name === "Shounen" && (
                        <div>
                          <img src={manga.images.jpg.image_url} alt="" />
                          <p> titre: {manga.title}</p>
                          <p> type: {manga.type}</p>
                          <p> score: {manga.score}</p>
                          {/* <h2 className="h2">{item.name}</h2> */}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}

export default Shonen;
