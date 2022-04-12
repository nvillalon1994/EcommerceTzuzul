import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping,faBar} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../api/index'
import { faHome,faBarChart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"

import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'

const scrollarriba =()=>{
  window.scroll({
      top: -1000,
      left: 100,
      
    });
}

export default function Navbar() {
  const currentUser = useAuth();
  const {carrito} =useSelector(state=>state.carrito) 
  
  // const cart=carrito.map((car)=>{return car.carrito})
  let cart=[]
    
    console.log(cart)
    carrito.map((c)=>{
        if(currentUser){
            if(c.producto.id===currentUser.email){
                cart.push({producto:c.producto,id:c.id})
                
            }
        }
        
    })
    console.log(cart)
    if(currentUser){
      
      if(currentUser.email==="natalius_94@hotmail.com"){
        console.log("son iguales")
      }
    }
    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    }
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <nav className='navbar'>
        <div className='links_top'>
          <ul className='links_redes'>
              <li> <Link className='link_fontaw' to="/"><FontAwesomeIcon icon={faInstagram} /></Link> </li>
              <li> <Link className='link_fontaw' to="/"><FontAwesomeIcon icon={faFacebook} /></Link>  </li>
              <li> <Link className='link_fontaw' to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>  </li>
              
            </ul>
            <Link className='logo' to='/'><motion.img animate={{ rotate: [0,0,0,0,360] }}
            transition={{ duration: 3 }} src={logo} alt="logo" /></Link>
            {/* {!currentUser?
            <ul className='links_log_buy'>
              <li><Link   className='link_fontaw login' to="/login">LogIn</Link> </li>
            </ul>:<ul className='links_log_buy'>
              <li><Link   className='link_fontaw ' to="/login">{currentUser.email}</Link> </li>
              <li><Link  className='link_fontaw' to="/carrito"><FontAwesomeIcon icon={faCartShopping} />{cart?.length}</Link> </li>
              </ul>} */}
            <ul className='links_log_buy'>
              {!currentUser?<li><Link   className='link_fontaw' to="/login">LogIn</Link> </li>:<li><Link   className='link_fontaw ' to="/login">{currentUser.email}</Link> </li>}
              
              {currentUser&&currentUser.email==="natalius_94@hotmail.com"?<li><Link  className='link_fontaw' to="/crear">Edición</Link> </li>:<></>}
              <li><Link  className='link_fontaw' to="/carrito"><FontAwesomeIcon icon={faCartShopping} />{cart?.length}</Link> </li>
              
            </ul>
        </div>
        
      
        
        <ul className='navbar_links' onClick={scrollarriba}>
            <li><Link className='navbar_link' to="/"> Home</Link></li>
            <li><Link  className='navbar_link'to='/colgantes' >Colgantes</Link></li> 
            <li><Link  className='navbar_link' to='/aros'>Aros</Link></li> 
            <li><Link  className='navbar_link' to='/llaveros'>Llaveros</Link></li>
            <li><Link  className='navbar_link' to="/productos">Todos los productos</Link></li>
            
            
        </ul>
         
    </nav>
    <button className='buttonNav' onClick={()=>{setIsOpen(!isOpen)}}><FontAwesomeIcon icon={faBarChart} /></button>
    <motion.nav
    animate={isOpen ? "open" : "closed"}
    variants={variants}
     className='navbar2'>
       
       <div className='links_top2'>
          
            <Link className='logo2' to='/'><motion.img animate={{ rotate: [0,0,0,0,360] }}
            transition={{ duration: 3 }} src={logo} alt="logo" onClick={()=>{setIsOpen(!isOpen)}} /></Link>
            {/* {!currentUser?
            <ul className='links_log_buy'>
              <li><Link   className='link_fontaw login' to="/login">LogIn</Link> </li>
            </ul>:<ul className='links_log_buy'>
              <li><Link   className='link_fontaw ' to="/login">{currentUser.email}</Link> </li>
              <li><Link  className='link_fontaw' to="/carrito"><FontAwesomeIcon icon={faCartShopping} />{cart?.length}</Link> </li>
              </ul>} */}
            <ul className='links_log_buy'>
              {!currentUser?<li><Link   className='link_fontaw' to="/login" onClick={()=>{setIsOpen(!isOpen)}}>LogIn</Link> </li>:<li><Link   className='link_fontaw ' to="/login"onClick={()=>{setIsOpen(!isOpen)}}>{currentUser.email}</Link> </li>}
              
              {currentUser&&currentUser.email==="natalius_94@hotmail.com"?<li ><Link  className='link_fontaw' to="/crear" onClick={()=>{setIsOpen(!isOpen)}}>Edición</Link> </li>:<></>}
              <li><Link  className='link_fontaw' to="/carrito" onClick={()=>{setIsOpen(!isOpen)}}><FontAwesomeIcon icon={faCartShopping} />{cart?.length}</Link> </li>
              
            </ul>
        
        
      
        
          <ul className='navbar_links2' onClick={scrollarriba}>
            <li><Link className='navbar_link2' to="/" onClick={()=>{setIsOpen(!isOpen)}}> Home</Link></li>
            <li><Link  className='navbar_link2'to='/colgantes' onClick={()=>{setIsOpen(!isOpen)}} >Colgantes</Link></li> 
            <li><Link  className='navbar_link2' to='/aros' onClick={()=>{setIsOpen(!isOpen)}}>Aros</Link></li> 
            <li><Link  className='navbar_link2' to='/llaveros' onClick={()=>{setIsOpen(!isOpen)}}>Llaveros</Link></li>
            <li><Link  className='navbar_link2' to="/productos" onClick={()=>{setIsOpen(!isOpen)}}>Todos los productos</Link></li>
            
            
          </ul>
        </div>
         
    </motion.nav>
    </>
  )
}