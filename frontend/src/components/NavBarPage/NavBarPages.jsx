import { NavLink } from "react-router-dom";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png";
import "./NavBarPages.css";

function NavBarPages() {
  return (
    <div className="navbar1">
      <NavLink to="/" className="logo">
        <img
          className="Iriyajo"
          src="../src/assets/images/NavBar/Iriyajo2.png"
          alt="logo Iriyajo"
        />
      </NavLink>
      <div className="loginsign">
        <NavLink to="" className="login">
          <img className="imagenav" src={login} alt="login" />
        </NavLink>
        <NavLink to="" className="signup">
          <img className="imagenav" src={signup} alt="signup" />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBarPages;
