import { useState } from "react";
import "./Footer.css";
import Reseau from "./Reseau";
import Formulaire from "./Formulaire";

function Footer() {
  const [display, setDisplay] = useState(false);
  function close() {
    setDisplay(false);
  }
  function open() {
    setDisplay(true);
  }
  return (
    <div className="footer">
      <h2 className="h2">CONTACT</h2>
      <p className="text">
        Vous avez des questions ? Vous avez besoin d'un renseignement ?
      </p>
      <div>
        {display && (
          <div className="forme">
            <div className="overlay"> </div>
            <div className="modal-content">
              <button className="bout" type="button" onClick={close}>
                X
              </button>
              <Formulaire className="Formulaire" />
            </div>
          </div>
        )}
      </div>
      <div className="bloc">
        <div className="blocboutton">
          <button className="button" type="button" onClick={open}>
            NOUS CONTACTER
          </button>
        </div>
        <div className="reseau">
          <Reseau />
        </div>
      </div>
      <div className="finfooter">
        <a
          className="a"
          title="https://iriyajo/conditions-generales-abonnement"
          href="https://iriyajo//conditions-generales-abonnement"
        >
          Conditions generales
        </a>
        <a
          className="a"
          title="https://iriyajo/r/Politique de gestion des données personnelles"
          href="https://iriyajo/Politique de gestion des données personnelles"
        >
          Politique de gestion des données personnelles
        </a>
        <a
          className="a"
          title="https://mentions légales"
          href="https://iriyajo/mentions légales"
        >
          Mentions légales
        </a>
      </div>
    </div>
  );
}
export default Footer;
