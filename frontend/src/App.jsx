import { useEffect, useState } from "react";
import "./App.css";

// const animes={
//   title=""
//   synopsis="Gamma Akutabi is a mysterious figure, drifting through the western desert with a giant sword slung over his shoulder and a right arm made completely of metal spreading up and over his cheek. He searches endlessly for a mythical set of 12 Rings of the Dead—jewelry said to give life to the possessor. These rings are hunted by mercenaries and outlaws alike for a wide variety of reasons, but Gamma seeks to grant himself eternal life by possessing all 12. Gamma comes across teenager John Elwood Shepherd in his travels, who decides to follow Gamma after a brutal fight claims the life of his sister. Elwood seeks to use the Rings of the Dead to bring his sister back to life and quickly develops an admiration for Gamma, whose combat prowess saves Elwood's life time after time. Along the way, the two travelers encounter new friends and old allies from Gamma's past, working with them to defeat enemies who seek to use the Rings of the Dead for their own nefarious purposes. [Written by MAL Rewrite] Included one-shots: Volume 2: Ultra Unholy Hearted Machine Volume 3: Kokumashi Urara (Rune Master Urara) Volume 4: Bad Shield United"
//   images: {
//     jpg: {
//       image_url: "https://cdn.myanimelist.net/images/manga/3/180035.jpg"},

// }}
function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime`)
      .then((res) => res.json())
      .then((data) => {
        console.info(data);
        setDatas(data.data);
      });
  }, []);
  return (
    <div>
      {datas.map((anime) => {
        return (
          <article key={anime}>
            {anime.demographics.map((seinen) => {
              return (
                <div key={seinen.name}>
                  <article>
                    {<p>{seinen.name} </p> && (
                      <img src={anime.images.jpg.image_url} alt=" " />
                    )}
                  </article>
                </div>
              );
            })}
            {/* <h1>{anime.title}</h1>
            <p>{anime.synopsis}</p> */}
            {/* <img src={} alt="" /> */}
          </article>
        );
      })}
    </div>
  );
}

export default App;
