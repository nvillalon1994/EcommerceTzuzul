import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { obtenerProductos } from '../features/productos/productosSlice'
import Producto from './Producto'
export default function Nuevos() {
    // const {productos} =useContext(productsContext)
    // const [filtro,setFiltro] = useState([])
    const {productos} = useSelector(state=>state.productos)
    // console.log(productos)
    const products=productos.map((producto)=>{return(producto.producto)})
    const filtroNuevos =[]
    products.map((producto)=>{
        if(producto.nuevo==="si"){
            filtroNuevos.push(producto)
            // console.log(filtroNuevos)
            


        }
    })
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch(obtenerProductos())
    

},[dispatch])
  return (
    <section className='nuevos'>
        <h1 id='tituloSeccion'>Nuevos</h1>
        <Producto filtroNuevos={filtroNuevos}/>
        
    </section>
  )
}
