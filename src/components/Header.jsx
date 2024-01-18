import logo from "../assets/logo.svg";
import "../App.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo Lucas Daher Developer" />
      </div>
      <ul className="links">
        <li>
          <a href=".">Projetos</a>
        </li>
        <li>
          <a href=".">Sobre</a>
        </li>
        <li>
          <a href=".">Contato</a>
        </li>
      </ul>
      <ul className="joinBtn">
        <li>
          <a href=".">
            <button type="button">Entrar</button>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
