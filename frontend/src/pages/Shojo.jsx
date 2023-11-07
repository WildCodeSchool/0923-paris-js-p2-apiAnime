import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import LoginSignup from "../components/NavBarPage/LoginSignupPages";
import NavBarPages from "../components/NavBarPage/NavBarPages";

function Shojo() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?page=3`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);
  return (
    <body id="PageSelection">
      <NavLinkPage />
      <NavBarPages />
      <LoginSignup />
      <div>
        <h2 className="h2">la page Shoujo</h2>
        <div>
          {mangas.map((manga) => {
            return (
              <div key={manga.mal_id}>
                {manga.demographics.map((item) => {
                  return (
                    <div key={item.name}>
                      {item.name === "Shoujo" && (
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
                })}
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}

export default Shojo;