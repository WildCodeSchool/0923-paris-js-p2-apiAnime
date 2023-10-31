import "./formulaire.css";

function Formulaire() {
  return (
    <div className="container">
      <form className="form" action="merci.html">
        <div className="formulaire">
          <label className="label" htmlFor="name">
            Prénom :
          </label>
          <input type="text" name="fName" id="fName" />
        </div>
        <div className="formulaire">
          <label className="label" htmlFor="name">
            Nom de famille :
          </label>
          <input type="text" name="lName" id="lName" />
        </div>
        <div className="formulaire">
          <label className="label" htmlFor="email">
            Votre e-mail :
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="formulaire">
          <label className="label" htmlFor="message">
            Votre message :
          </label>
          <textarea className="texterea" id="message" name="message" />
        </div>
        <button className="boutton" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
export default Formulaire;
