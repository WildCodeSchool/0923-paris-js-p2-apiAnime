import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./LastPage.css";

function LastPage() {
  const { Id } = useParams();
  const [mangue, setMangue] = useState({});
  const [goyave, setGoyave] = useState({});
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${Id}/videos`)
      .then((res) => res.json())
      .then((data) => setMangue(data.data));
    fetch(`https://api.jikan.moe/v4/anime/${Id}/full`)
      .then((res) => res.json())
      .then((data) => setGoyave(data.data));
  }, []);
  return (
    <div className="PageResume">
      <NavBarPages />
      <NavLinkPage />
      <div className="principal">
        <div className="VideoResume">
          <h1>{mangue.title}</h1>
          <center>
            <img
              className="imgVideoResume"
              src={goyave.images?.jpg?.image_url}
              alt=""
            />
            <h2 className="resumeAnime">Resume</h2>
          </center>
          <p className="TextResume">{goyave.synopsis}</p>
          <h2>Video Summary</h2>
          <div className="player-wrapper">
            <ReactPlayer
              url={goyave?.trailer?.url}
              playing
              controls
              muted
              width="70%"
              height="70%"
              className="player"
            />
          </div>
        </div>
        <h2 className="EpisodeAnime">Episodes</h2>
        <div className="affiche">
          {mangue.episodes?.map((episode) => {
            return (
              <div className="episode" key={episode.mal_id}>
                <a className="yaya" href={episode.url}>
                  <img
                    src={episode?.images?.jpg.image_url}
                    alt={episode.title}
                    className="riri"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="ImgShenron">
          <img
            className="PopShenron"
            src="../src/assets/images/PopShenron.png"
            alt="Pop Shenron"
          />
          <div className="jojo">
            {goyave.external?.map((externe) => {
              return (
                <ul key={externe.url}>
                  <li>
                    <a href={externe.url}>{externe.name}</a>
                  </li>
                </ul>
              );
            })}
          </div>
          <img
            className="PopShenron"
            src="../src/assets/images/PopShenron.png"
            alt="Pop Shenron"
          />
        </div>
      </div>
    </div>
  );
}

export default LastPage;
