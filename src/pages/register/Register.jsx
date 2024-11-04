import logo from "/src/assets/logo.svg";
import arrowImg from "../../assets/arrow.svg";
import "./style.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logoImg" />
        <span>Por favor insira suas informações</span>
      </header>
      <form>
        <div className="inputContainer">
          <label htmlFor="LDAP">Seu LDAP</label>
          <input
            type="text"
            name="matricula"
            id="ldap"
            placeholder="LDAP"
            //onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="Name">User Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome completo"
            //onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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

        <a href="#">Esqueceu sua senha ?</a>
        <button className="button">
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Já tem uma conta?</p>
          <Link to="/">Clique aqui</Link>
        </div>
      </form>
    </div>
  );
}
