import React, { useContext, useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { obtenerCarrito } from '../features/carrito/carritoSlice'
import { tomarCart,deleteFromCart } from '../api/productos'
import { useAuth } from '../api/index'
import { obtenerProductos } from '../features/productos/productosSlice'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faTrashAlt, faTrash, faCartShopping} from '@fortawesome/free-solid-svg-icons'
export default function Carrito() {
    const currentUser = useAuth();
    const {carrito} =useSelector(state=>state.carrito) 
    let cart=[]
    
    console.log(carrito)
    carrito.map((c)=>{
        if(currentUser){
            if(c.producto.id===currentUser.email){
                cart.push({producto:c.producto,id:c.id})
                
            }
        }
        
    })
    let totalArray=[];
    cart.map((c)=>{
        totalArray.push(c.producto.precio)
    })
    console.log(totalArray)
    let sum = 0;
    for (let i = 0; i < totalArray.length; i++) {
        sum += parseInt(totalArray[i]);
    }
    console.log(sum);
    
    if(currentUser){
        console.log(currentUser.email)
    }
    const deleteCarrito=(id)=>{
        deleteFromCart(id)
        dispatch(obtenerCarrito())
    }

    
    
    
    
    
    
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(obtenerCarrito())
        dispatch(obtenerProductos())
        
    

    },[dispatch])
   
 
    
    
    
  return (
    <section className='carritoContainer'>

            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        
                        <th>Eliminar</th>
                    </tr>
                </thead>
                {cart?.map((product)=>
                
                <tbody className='carritoInfo'>
                
                    <tr>
                        <td><img src={product.producto.img} alt="imgproducto" /></td>
                        <td>{product.producto.nombre}</td>
                        <td>$ {product.producto.precio}</td>
                        
                        
                        <td><button onClick={()=>{deleteCarrito(product.id)}}><FontAwesomeIcon className='delete' icon={faTrash} /></button></td>
                    </tr>

                </tbody>)}
            </table>
            {currentUser?<div className='total'>
                <h2 id='tituloSeccion2'>Total a pagar: $ {sum} </h2>
                <Link to={'/checkOut/'+sum}><button>Pagar</button></Link>
            </div>:<div className='total2'>
                
                <Link to={'/login'}><button >Iniciar Sesión para realizar compras</button></Link>
            </div>}
            
            
        
    </section>
  )
}
