import { useState, useEffect } from "react";
import Navbarfiltre from "../components/navbarfiltre/Navbarfiltre";

function Shonen() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/manga?page=2`)
      .then((res) => res.json())
      .then((data) => setMangas(data.data));
  }, []);

  return (
    <div>
      <Navbarfiltre />
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
                        <p> titre: {manga.title}</p>
                        <img src={manga.images.jpg.image_url} alt="" />
                        <h2 className="h2">{item.name}</h2>
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
  );
}

export default Shonen;
