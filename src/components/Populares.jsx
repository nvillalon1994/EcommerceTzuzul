import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { obtenerProductos } from '../features/productos/productosSlice'
import Producto from './Producto'
export default function Populares() {
    // const {productos} =useContext(productsContext)
    // const [filtro,setFiltro] = useState([])
    const {productos} = useSelector(state=>state.productos)
    
    const products=productos.map((producto)=>{return(producto.producto)})
    // console.log(products)
    const filtroNuevos =[]
    
    products.map((producto)=>{
        if(producto.popular==="si"){
            filtroNuevos.push(producto)
            // console.log(filtroNuevos)
            


        }
    })
    // console.log(filtroNuevos)

  return (
    <section className='pproductsSection' >
        <h1 id='tituloSeccion'>Productos Destacados</h1>
        <Producto filtroNuevos={filtroNuevos}/>
        
        
    </section>
  )
}
