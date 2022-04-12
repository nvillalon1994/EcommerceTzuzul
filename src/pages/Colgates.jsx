import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Producto from '../components/Producto'

export default function Colgantes() {
    // const {productos} =useContext(productsContext)
    const {productos} = useSelector(state=>state.productos)
    
    const products=productos.map((producto)=>{return(producto.producto)})
    // const [filtro,setFiltro] = useState([])
    const filtroNuevos =[]
    products.map((producto)=>{
        if(producto.categoria==="collares"){
            filtroNuevos.push(producto)
            console.log(filtroNuevos)
        


        }
    })
    
  return (
    <section className='productsSection'>
        <h1 id='tituloSeccion'>Colgantes</h1>
        <Producto filtroNuevos={filtroNuevos}/>
        {/* <div className='productosContainer'>
        {filtroNuevos.map((producto)=><Link to={"/productos/" + producto.id}  className='product'>
            
            <img src={producto.img} alt="" />
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
        </Link>)}
        </div> */}
        
    </section>
  )
}
