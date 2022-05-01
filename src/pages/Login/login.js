import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./login.css";

function Login() {
  return (
    <div>
      <Header note={false} login={true} />
      <div className="login-body">
        <div className="main-container">
          <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
              <label htmlFor="full-name">Nome Completo:</label>
              <input type="text" name="full-name" id="full-name"/>
              <br />
              <label htmlFor="CPF">CPF:</label>
              <input type="number" name="CPF" id="CPF"/>
              <br />
              <label htmlFor="password">Senha: </label>
              <input type="password" name="password" id="password"/>
              <br />
              <Link to="/imc">
                <button className="login-btn">Enviar</button>
              </Link>
              <br />
              <div className="sign-in-phrase">Não é cadastrado ainda?</div>
              <a className="click-here-sign-in" href="signIn.html">
                Clique aqui!
              </a>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
