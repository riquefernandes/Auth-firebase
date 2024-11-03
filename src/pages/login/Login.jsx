import  logo  from '/src/assets/logo.svg'
import './style.css'

 function Login() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logoImg" />
        <spam>Por favor digite suas informações de login</spam>
      </header>
    </div>
  );
}

export default Login
