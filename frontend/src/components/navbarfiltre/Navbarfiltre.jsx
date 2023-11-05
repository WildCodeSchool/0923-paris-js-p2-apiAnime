import { Link } from "react-router-dom";
import "./navabarfiltre.css";

function Navbarfiltre() {
  return (
    <ul className="ul">
      <li className="li">
        <Link className="link" to="/seinen">
          Seinen
        </Link>
      </li>
      <li className="li">
        <Link className="link" to="/shonen">
          Shonen
        </Link>
      </li>
      <li className="li">
        <Link className="link" to="/shojo">
          Shojo
        </Link>
      </li>
      <li className="li">
        <Link className="link" to="/kimodo">
          Kimodo
        </Link>
      </li>
    </ul>
  );
}
export default Navbarfiltre;
