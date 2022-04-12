import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import Nuevos from '../components/Nuevos'
import Populares from '../components/Populares'
import { obtenerProductos } from '../features/productos/productosSlice'
import { createProducts } from '../api/productos'
import { obtenerCarrito } from '../features/carrito/carritoSlice'
import { Link } from 'react-router-dom'

export default function Home() {
//   const {productos} = useSelector(state=>state.productos)
//   console.log(productos)
//   const usuario = "usuario"
//   const crear = (event)=>{
//     event.preventDefault()
//     const{name, description, precio, categoria, nuevo, popular}=event.target
//     // console.log(nuevo.value)
//     const producto = {nombre:name.value,description:description.value,precio:precio.value,categoria:categoria.value,nuevo:nuevo.value,popular:popular.value
//     }
//     createProducts(producto,usuario)
//   }
  
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(obtenerProductos())

// },[dispatch])
//   const {carrito} =useSelector(state=>state.carrito) 
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(obtenerCarrito())


// },[dispatch])
// console.log(carrito)

  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(obtenerCarrito()).then(res=>obtenerCarrito())
      dispatch(obtenerProductos())
      


  },[dispatch])
  return (
    <main>
      
        <Hero/>

        <Populares id="populares"/>
        <Nuevos/>
        
        
       
    </main>
  )
}
