import { Modal } from "react-responsive-modal";
import { useState } from "react";
import "./formulaireLogin.css";
import ImgAccountLogin from "../../assets/images/NavBar/ImgAccountLogin.png";
import FormulaireSignUp from "./FormulaireSignUp";

function FormulaireLogin() {
  const [display2, setDisplay2] = useState(false);

  const onOpenModal2 = () => setDisplay2(true);
  const onCloseModal2 = () => setDisplay2(false);
  return (
    <form className="formContainer">
      <p className="textLogin">Login</p>
      <input
        className="formContainerInput"
        type="email"
        placeholder="email@gmail.com"
      />
      <input
        className="formContainerInput"
        type="password"
        placeholder="******"
      />
      <button className="button3" type="button">
        Connexion
      </button>
      <div className="ImgAccount">
        <p>You don't have an account ? clic here</p>
        <button className="ImgLoginButton" type="button" onClick={onOpenModal2}>
          <img className="ImgAccountLogin" src={ImgAccountLogin} alt="login" />
        </button>
        <Modal open={display2} onClose={onCloseModal2} center>
          <FormulaireSignUp />
        </Modal>
      </div>
    </form>
  );
}

export default FormulaireLogin;
