// import React, { useContext, useRef, useState } from 'react'
// import { Link } from 'react-router-dom';
// import {auth,signup,useAuth,logout} from '../api/index'
// import {onAuthStateChanged, signInWithEmailAndPassword, signOut,} from 'firebase/auth'
// import { productsContext } from '../context/ProductsContext';

// import loginReducer from '../reducer/loginReducer';

// export default function Register() {
//     const {register,login} = useContext(productsContext)
//     const currentUser = useAuth()
//     const [usuario,setUsuario]=useState({})
//     const [loading,setLoading]=useState(false)
    

//     const registro = async(e)=>{
      
//       e.preventDefault()
//       const{email,password}=e.target
//       console.log(email.value,password.value)
//       setLoading(true)
//       try{
        
//         await signup(email.value,password.value)
//       }catch(error){console.log(error)}
//       setLoading(false)

//   }
//   async function handleLogOut(){
//     setLoading(true)
//     try{
//       await logout()
//     }catch(error){alert("error")}
//     setLoading(false)
//   }
//   async function handleLogIn(e){
//     e.preventDefault()
//     const{email2,password2}=e.target
//     console.log(email2.value,password2.value)
//     // setLoading(true)
//     // try{
//     //   await login(email2.value,password2.value)
//     // }catch(error){alert("error")}
//     // setLoading(false)
//   }
  
    
//   return (
//     <section className='productsSection'>
//         <h2>Usuario:{currentUser?.email}</h2>
//         <div className='contenedor-form'>
//         <form action="" className='formulario' onSubmit={registro}  >
//             <h1 id='tituloSeccion'>Registrate</h1>

//             <input className='input'   type="email" name="email" placeholder='Ingrese el nombre de Usuario'/>
//             <input className='input' type="password"  name="password" id="password" placeholder='Ingrese su contraseña' />
//             <button disabled={loading || currentUser}>Registrate</button>
            
//         </form>
//         <button onClick={handleLogOut}disabled={loading|| !currentUser}>Cerrar Sesión</button>
        
//           <form onSubmit={handleLogIn} >
//             <input className='input'   type="email" name="email2" placeholder='Ingrese el nombre de Usuario'/>
//             <input className='input' type="password"  name="password2" id="password2" placeholder='Ingrese su contraseña' />
//             <button >Inicia Sesión</button>
//           </form>
          
//         </div>
//         <p>Ya tienes cuenta? <Link to={'/login'} className="registrate">Logueate!</Link> </p>
//     </section>
//   )
// }
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, login, logout, useAuth } from "../api/index";

export default function Login() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
      await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
      // alert("Error!");
    // }
    setLoading(false);
  }

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
    <section id="main" className="formSection">
      {/* <h1>Usuario:{currentUser?.email}</h1> */}
      <article className='img_login'>
                <img src="https://cdn3.iconfinder.com/data/icons/scenes-22/1000/accounts___man_workspace_desk_laptop_login_user-256.png"  alt="Imagen" />
                
                
                
            </article>
            

      <div id="" className="formContainer">
        
        <div className="form">
          <form className="formInfo">
          <legend id="tituloSeccion2">Registrate</legend>
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <div className="btnForm">
              <button disabled={ loading || currentUser } onClick={handleSignup}>Registrate</button>
              <button disabled={ loading || !currentUser } onClick={handleLogout}>Cerrar Sesión</button>
            </div>
            
          </form>
          <p>No tienes cuenta? <Link to={'/login'} className="registrate">Inicia Sesión!</Link> </p>
        </div>
        
      </div>

      
      
      

    </section>
  );
}
