import { useState } from "react";
import sprite from "../images/sprite.svg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`nav  ${expanded ? "collapsible--expanded" : ""}`}>
      <a className="nav__brand" href="/">
        Ewa Kania Fotografia
      </a>
      <svg
        className="icon icon--primary nav__toggler"
        onClick={() => setExpanded(!expanded)}
      >
        <use xlinkHref={`${sprite}#menu`}></use>
      </svg>
      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <a href="#">O MNIE</a>
        </li>
        <li className="nav__item">
          <a href="#">OFERTA</a>
        </li>
        <li className="nav__item">
          <a href="#">WASZE HISTORIE</a>
        </li>
        <li className="nav__item">
          <a href="#">FAQ</a>
        </li>
        <li className="nav__item">
          <a href="#">KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
