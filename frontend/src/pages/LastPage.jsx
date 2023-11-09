/* eslint-disable react/self-closing-comp */
import NavLinkPage from "../components/NavBarPage/NavLinkPage";
import NavBarPages from "../components/NavBarPage/NavBarPages";
import "./LastPage.css";

function LastPage() {
  return (
    <body id="PageResume">
      <NavLinkPage />
      <NavBarPages />
      <div className="VideoResume">
        <h1>Résumé Vidéo</h1>

        <iframe
          width="650"
          height="400"
          src="https://www.youtube.com/embed/E7WytLM2KvY?si=xQie4mi2dAcEbmeB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
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
    </body>
  );
}

export default LastPage;
