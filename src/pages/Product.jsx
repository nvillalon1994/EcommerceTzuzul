import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAuth } from '../api'
import { addToCart } from '../api/productos'

import { obtenerCarrito } from '../features/carrito/carritoSlice'

export default function Porduct() {
    const {idProduct} =useParams()
    
    
    // const {usuario,user,addToCart,carrito} =useContext(productsContext)
    const {productos} = useSelector(state=>state.productos) 
    const products=productos.map((producto)=>{return(producto.producto)})
    
    
    const {carrito} =useSelector(state=>state.carrito) 
    const cart=carrito.map((car)=>{return(car.producto)})
    console.log(carrito)
    const currentUser = useAuth();
    let product
    products.map((producto)=>{
        if(producto.id===parseInt(idProduct)){
            product=producto
            console.log(producto)
        }
        
    })

    
    const dispatch = useDispatch()
    const add=(product1)=>{
      
      if(!currentUser){
        alert("Inicia sesión para adquirir este producto")
      }else{
        addToCart(currentUser.email,product1,cart)
        dispatch(obtenerCarrito())
      }
    }
    
  return (
    <section >
      {product&&<div className=' producto'>
        <article className='product_img' >
          <img src={product.img} alt="" />
        </article>
        <article className='product_info'>
          <div>
          <h2>{product.nombre}</h2>
          <h4 className='description'>{product.description}</h4>
          <div>
            <h3>$ {product.precio}</h3>
            <p className='cuotas'> en 12 x $ {(parseInt(product.precio)/12).toFixed(2)} </p>
          </div>
          
          
            
            {product.categoria==="collares"&&
            <div className='optionsContainer'>
              <p>Elige tu colgante(Opcional)</p>
              <select name="colgante" id="" className='optionsCollar'>
                
                <option value="500$">Cadena de acero quirujica($500)</option>
                <option value="300$">Gargantilla de alambre de alpaca($300)</option>
                <option value="100$">Cordon($100)</option>
                <option value="0">Solamente el Dije</option>
              </select>
            </div>}
            </div>
            <div className='botons' >

              
              <button className='btn_compra'onClick={()=>{add(product)}}>Agregar Al carrito</button>
            </div>
          
          
          
          
          
        </article>
        </div>}
        
        
        
      
      
    </section>
  )
}
