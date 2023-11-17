import { NavLink } from "react-router-dom";
import "./navLinkPage.css";

function NavLinkPage() {
  return (
    <nav className="NavLink">
      <NavLink to="/komodo">
        <img
          className="ImageNavLink"
          src="../src/assets/images/NavBar/cloudTransparent.png"
          alt="cloud"
        />
        <h1 className="textNavBar">Kômodo</h1>
      </NavLink>
      <NavLink to="/shonen">
        <img
          className="ImageNavLink"
          src="../src/assets/images/NavBar/cloudTransparent.png"
          alt="cloud"
        />
        <h1 className="textNavBar">Shôunen</h1>
      </NavLink>
      <NavLink to="/shojo">
        <img
          className="ImageNavLink"
          src="../src/assets/images/NavBar/cloudTransparent.png"
          alt="cloud"
        />
        <h1 className="textNavBar">Shôujo</h1>
      </NavLink>
      <NavLink to="/seinen">
        <img
          className="ImageNavLink"
          src="../src/assets/images/NavBar/cloudTransparent.png"
          alt="cloud"
        />
        <h1 className="textNavBar">Seinen</h1>
      </NavLink>
      <NavLink to="/hentai">
        <img
          className="ImageNavLink"
          src="../src/assets/images/NavBar/cloudTransparent.png"
          alt="cloud"
        />
        <h1 className="textNavBar">Hentai</h1>
      </NavLink>
    </nav>
  );
}
export default NavLinkPage;
