/* eslint-disable react/self-closing-comp */
import "./LastPage.css";

function LastPage() {
  return (
    <section>
      <div className="VideoResume">
        <h1>Résumé Vidéo</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E7WytLM2KvY?si=eSar4w1DQF1AGWCI"
          title="YouTube video player"
        ></iframe>
      </div>

      <div className="ImgShenron">
        <img
          className="PopShenron"
          src="../src/components/images/PopShenron.png"
          alt="Pop Shenron"
        />
        <img
          className="PopShenron"
          src="../src/components/images/PopShenron.png"
          alt="Pop Shenron"
        />
      </div>
    </section>
  );
}

export default LastPage;
