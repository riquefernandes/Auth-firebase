import logo from "/src/assets/logo.svg";
import arrowImg from "../../assets/arrow.svg";
import "./style.css";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logoImg" />
        <span>Por favor digite seu LDAP Siemens</span>
      </header>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            //onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            //onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="conected">
          <span className="texts">Lembrar a senha?</span>
          <input type="checkbox"></input>
        </div>

        <a href="#">Esqueceu sua senha ?</a>
        <button className="button">
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/Register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
