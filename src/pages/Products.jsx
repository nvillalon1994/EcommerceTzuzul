import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Producto from '../components/Producto'
import { useSelector } from 'react-redux'
export default function Products() {
  
  const {productos} = useSelector(state=>state.productos)
    
  const products=productos.map((producto)=>{return(producto.producto)})
  
  return (
    <section className='productsSection'>
      <h1 id='tituloSeccion'>Todos nuestros productos</h1>
      <Producto filtroNuevos={products}/>
    </section>
  )
}
