import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation({ imc, signin, login, home }) {
  if (home) {
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li>
            <select
              name="empresa-information"
              className="empresa-information"
              onchange="location = this.value;"
            >
              <option value="#about-us">Sobre Nós</option>
              <option value="#vision">Visão da Empresa</option>
              <option value="#mission">Missão da Empresa</option>
              <option value="#values">Valores da Empresa</option>
            </select>
          </li>
          <li className="nav-item-red">
            <a href="#adress">Endereço</a>
          </li>
          <li className="nav-item-yellow">
            <a href="#contacts">Contatos</a>
          </li>
          <li className="nav-item-green">
            <Link className="a" to="/login">
              <button>Login</button>
            </Link>
          </li>
          <li className="nav-item-green">
            <Link className="a" to="/signin">
              <button>Cadastro</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (login) {
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item-red">
            <a href="#contacts">Contatos</a>
          </li>
          <li className="nav-item-yellow2">
            <Link className="a2" to="/signin">
              <button>Cadastro</button>
            </Link>
          </li>
          <li className="nav-item-green">
            <Link className="a" to="/">
              <button>Sair</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (signin) {
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item-red">
            <a href="#contacts">Contatos</a>
          </li>
          <li className="nav-item-yellow2">
            <Link className="a2" to="/login">
              <button>Login</button>
            </Link>
          </li>
          <li className="nav-item-green">
            <Link className="a" to="/">
              <button>Sair</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (imc) {
    return (
      <nav className="main-nav">
        <ul className="nav-list">
          <li>
            <select
              name="IMC-information"
              className="IMC-information"
              onchange="location = this.value;"
            >
              <option value="#IMC">IMC</option>
              <option value="#IMC-def">Definição de IMC</option>
              <option value="#IMC-table">Tabela de IMC</option>
              <option value="#IMC-calc">Cálculo de IMC</option>
            </select>
          </li>
          <li className="nav-item-yellow">
            <a href="#contacts">Contatos</a>
          </li>
          <li className="nav-item-green">
            <Link className="a" to="/">
              <button>Sair</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
