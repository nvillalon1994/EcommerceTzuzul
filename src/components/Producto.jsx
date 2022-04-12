import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../api/index'
import { addToCart } from '../api/productos'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerCarrito } from '../features/carrito/carritoSlice'
import { obtenerProductos } from '../features/productos/productosSlice'
import { onGetTasks } from '../api/productos'
export default function Producto({filtroNuevos}) {
  // const {productos,usuario,user,addToCart,carrito} =useContext(productsContext)
  // const nombre = usuario.usuario.nombre
  const {carrito} =useSelector(state=>state.carrito) 
  const cart=carrito.map((car)=>{return(car.producto)})
  console.log(carrito)
  const currentUser = useAuth();
  const add=(producto)=>{
    
    addToCart(currentUser.email,producto,cart)
    dispatch(obtenerCarrito())
  }
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(obtenerCarrito())
    dispatch(obtenerProductos())
    

},[dispatch])
  return (
    <div className='productosContainer' >
          {filtroNuevos.map((producto)=><div className='productoContainer'>
          <div className="btn__addToCart" >
            <button onClick={()=>{add(producto)}}><FontAwesomeIcon icon={faCartPlus} /></button>
          </div>
          <Link to={"/productos/" + producto.id} className='product' >
                {producto.nuevo==="si"&&
                <div className='label_New'><p> Nuevo</p></div>
                    }
                {producto.popular==="si"&&
                <div className='label_Popular'><p> Popular</p></div>
                    }
              <img src={producto.img} alt="" />
              <div className='info_card'>
                <p className='text'>{producto.nombre.charAt(0).toUpperCase() +producto.nombre.substring(1, producto.nombre.length) }</p>
                <p> $ {producto.precio}</p>
                
                
              </div>
              
              
          </Link></div>)}
        </div>
  )
}
