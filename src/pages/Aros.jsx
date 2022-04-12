import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Producto from '../components/Producto'
import { useSelector } from 'react-redux'
export default function Aros() {
    // const {productos} =useContext(productsContext)
    const {productos} = useSelector(state=>state.productos)
    
    const products=productos.map((producto)=>{return(producto.producto)})
    // const [filtro,setFiltro] = useState([])
    const filtroNuevos =[]
    const filtroAro=()=>{
      products.map((producto)=>{
        console.log(producto.categoria)
          if(producto.categoria==="aros"){
              filtroNuevos.push(producto)
              console.log(filtroNuevos)
              
  
  
          }
      })
    }
    products.map((producto)=>{
      console.log(producto.categoria)
        if(producto.categoria==="aros"){
            filtroNuevos.push(producto)
            console.log(filtroNuevos)
            


        }
    })
  return (
    <section  className='productsSection'>
        <h1 id='tituloSeccion'>Aros</h1>
        <Producto filtroNuevos={filtroNuevos}/>
        {/* <div className='productosContainer'>
          {filtroNuevos.map((producto)=><div className='productoContainer'>
          <div className="btn__addToCart" >
            <button><FontAwesomeIcon icon={faCartPlus} /></button>
          </div>
          <Link to={"/productos/" + producto.id} className='product' >
              {producto.nuevo===true&&
                <div className='label_New'><p> Nuevo</p></div>
                    }
              <img src={producto.img} alt="" />
              <div className='info_card'>
                <p className='text'>{producto.nombre}</p>
                <p> $ {producto.precio}</p>
                
                
              </div>
              
              
          </Link></div>)}
        </div> */}



        {/* <div className='productosContainer'>
        
        {filtroNuevos.map((producto)=><div>
          <div className="btn__addToCart" >
            <button><FontAwesomeIcon icon={faCartPlus} /></button>
          </div>
        <Link to={"/productos/" + producto.id} className='product' >
            
            <img src={producto.img} alt="" />
            <div className='info_card'>
              <p>{producto.nombre}</p>
              <p> $ {producto.precio}</p>
              
            </div>
            
            
        </Link></div>)}
        </div> */}
        
    </section>
  )
}
