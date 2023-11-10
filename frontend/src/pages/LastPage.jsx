/* eslint-disable react/self-closing-comp */
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
    fetch(`https://api.jikan.moe/v4/anime/${Id}`)
      .then((res) => res.json())
      .then((data) => setMangue(data.data));

    fetch(`https://api.jikan.moe/v4/anime/${Id}/full`)
      .then((res) => res.json())
      .then((data) => setGoyave(data.data));
  }, []);

  return (
    <div className="PageResume">
      <NavLinkPage />
      <NavBarPages />
      <div>
        {console.info("mangue", mangue)}
        {console.info("goyave", goyave)}
        <div className="VideoResume">
          <h1>{mangue.title}</h1>
          <img src={mangue.images?.jpg?.image_url} alt="" />
          <p className="TextResume">{mangue.synopsis}</p>
          <h2>Résumé Vidéo</h2>
          <iframe
            width="650"
            height="400"
            src={mangue.trailer?.youtube_id?.url?.embed_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

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
        <div className="ImgShenron">
          <img
            className="PopShenron"
            src="../src/assets/images/PopShenron.png"
            alt="Pop Shenron"
          />
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
