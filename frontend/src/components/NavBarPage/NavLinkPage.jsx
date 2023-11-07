import { NavLink } from "react-router-dom";

function NavLinkPage() {
  return (
    <nav className="NavLink">
      <NavLink to="/kimodo">
        <h1 id="textNavBar">Kimodo</h1>
      </NavLink>
      <NavLink to="/shonen">
        <h1 id="textNavBar">Shonen</h1>
      </NavLink>
      <NavLink to="/shojo">
        <h1 id="textNavBar">Shojo</h1>
      </NavLink>
      <NavLink to="/seinen">
        <h1 id="textNavBar">Seinen</h1>
      </NavLink>
      <NavLink to="/lastpage">
        <h1 id="textNavBar">Resumé</h1>
      </NavLink>
    </nav>
  );
}
export default NavLinkPage;
