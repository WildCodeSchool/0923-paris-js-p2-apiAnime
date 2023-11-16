import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png";
import FormulaireLogin from "./FormulaireLogin";
import FormulaireSignUp from "./FormulaireSignUp";

function NavBarFormulaire() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);

  const onOpenModal = () => setDisplay1(true);
  const onCloseModal = () => setDisplay1(false);

  const onOpenModal2 = () => setDisplay2(true);
  const onCloseModal2 = () => setDisplay2(false);

  return (
    <form>
      <button className="ImgLoginButton" type="button" onClick={onOpenModal}>
        <img className="ImgLogin" src={login} alt="login" />
      </button>

      <Modal open={display1} onClose={onCloseModal} center>
        <FormulaireLogin />
      </Modal>
      <button className="ImgLoginButton" type="button" onClick={onOpenModal2}>
        <img className="ImgLogin" src={signup} alt="login" />
      </button>
      <Modal open={display2} onClose={onCloseModal2} center>
        <FormulaireSignUp />
      </Modal>
    </form>
  );
}

export default NavBarFormulaire;
