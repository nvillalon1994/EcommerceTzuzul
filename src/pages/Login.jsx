import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { login, logout, useAuth } from "../api/index";

export default function Login() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <section id="main">
      {/* <h1>Usuario:{currentUser?.email}</h1> */}
      <section  className="formSection">
        <article className='img_login'>
                  <img src="https://cdn3.iconfinder.com/data/icons/scenes-22/1000/accounts___man_workspace_desk_laptop_login_user-256.png"  alt="Imagen" />
                  
                  
                  
              </article>
              

        <div id="" className="formContainer">
          
          <div className="form">
            <form className="formInfo">
              <legend id="tituloSeccion2">Iniciar Sesión</legend>
              <input ref={emailRef} placeholder="Email" />
              <input ref={passwordRef} type="password" placeholder="Password" />
              <div className="btnForm">
                <Link to='/'><button disabled={ loading || currentUser } onClick={handleLogin}>Iniciar Sesión</button></Link>
                <button disabled={ loading || !currentUser } onClick={handleLogout}>Cerrar Sesión</button>
              </div>
              
            </form>
            <p>No tienes cuenta? <Link to={'/register'} className="registrate">Registrate!</Link> </p>
          </div>
          
        </div>
      </section>
      

      
      
      

    </section>
  );
}
