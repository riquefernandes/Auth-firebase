import logo from '/src/assets/logo.svg'
import arrowImg from "../../assets/arrow.svg";
import './style.css'

function Login() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logoImg" />
        <spam>Por favor digite seu LDAP Siemens</spam>
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

        <a href="#">Esqueceu sua senha ?</a>
        <button className="button" >
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <a to="/register">Crie a sua conta aqui</a>
        </div>

      </form>


    </div>
  );
}

export default Login
