import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Producto from '../components/Producto'

export default function Llaveros() {
    // const {productos} =useContext(productsContext)
    const {productos} = useSelector(state=>state.productos)
    
    const products=productos.map((producto)=>{return(producto.producto)})
    // const [filtro,setFiltro] = useState([])
    const filtroNuevos =[]
    products.map((producto)=>{
        if(producto.categoria==="llaveros"){
            filtroNuevos.push(producto)
            console.log(filtroNuevos)

        }
    })
  return (
    <section className='productsSection'>
        <h1 id='tituloSeccion'>Llaveros</h1>
        <Producto filtroNuevos={filtroNuevos}/>
        
    </section>
  )
}
