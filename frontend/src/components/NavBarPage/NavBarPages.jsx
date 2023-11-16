import { NavLink } from "react-router-dom";
import NavBarFormulaire from "./NavBarFormulaire";
import "./NavBarPages.css";

function NavBarPages() {
  return (
    <div>
      <div className="navbar1">
        <NavLink to="/" className="logo">
          <img
            className="Iriyajo"
            src="../src/assets/images/NavBar/Iriyajo2.png"
            alt="logo Iriyajo"
          />
        </NavLink>
        <NavBarFormulaire />
      </div>
    </div>
  );
}

export default NavBarPages;
