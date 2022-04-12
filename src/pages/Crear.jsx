import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { obtenerProductos } from '../features/productos/productosSlice'
import { createProducts,fileHandler,onGetTasks,deleteProducts } from '../api/productos'
import { storage } from '../api'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Producto from '../components/Producto'
import { Link } from 'react-router-dom'



export default function Crear() {
    const {productos} = useSelector(state=>state.productos)
  const products=productos.map((producto)=>{return(producto.producto)})
  

  const id=productos.map((producto)=>{return(producto.id)})
  console.log(id)
  
  const usuario = "usuario"
  const crear = (e)=>{
    e.preventDefault()
    const{name, description,id, precio,img, categoria, nuevo, popular}=e.target
    
    console.log(typeof(parseInt(id.value)))
    const producto = {nombre:name.value,description:description.value,precio:precio.value,img:img.value,categoria:categoria.value,nuevo:nuevo.value,popular:popular.value,id:parseInt(id.value)
    }
    
    createProducts(producto,usuario)
    dispatch(obtenerProductos())
    
  }
 
  const[progress,setProgress]=useState(0)
  const [urlFile,setUrlFile]=useState()
  
  const subir =(e)=>{
      e.preventDefault()
      
      const file = e.target.files[0]
      console.log(file)
      uploadFiles(file)
      dispatch(obtenerProductos())
  }

  const uploadFiles =(file)=>{
      if(!file)return
          const storageRef =ref(storage,`/files/${file.name}`)
          const uploadTask= uploadBytesResumable(storageRef ,file)
           uploadTask.on("state_changed",(snapshot)=>{
               const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) *100)
               setProgress(prog)
           },(err)=>console.log(err),
           ()=>{
               getDownloadURL(uploadTask.snapshot.ref)
               .then(url => setUrlFile(url))
           }
           )
           
      
  }
  
  console.log(urlFile,"dale")
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(obtenerProductos())
    

},[dispatch])
const deleteProducto=(id)=>{
  deleteProducts(id)
  dispatch(obtenerProductos())
}
const [editStatus,setEditStatus]= useState(false)
  return (
    <div className='productsSection'>
        

        <form className='formCreate' onSubmit={crear}>
          <legend>Crea un producto</legend>
          <input type="text" name='name' placeholder='Producto' />
          <input type="text" name='description' placeholder='Descripcion' />
          <input type="text" name='precio' placeholder='Precio' />
          <input type="hidden" name='img' value={urlFile}   />
          <input type="text" name='id' value={parseInt(Math.random()*(100-productos.length))-productos.length} disabled={true}/>
          <div>
            <h3>Uploaded {progress} %</h3>
            <input type="file"  onChange={subir}  />
          </div>
          
          
          
          <label for="categoria">Categia:</label>
          <select name="categoria" id="">
            <option value="aros">aros</option>
            <option value="collares">collares</option>
            <option value="llaveros">llaveros</option>
            

          </select>
          <label for="nuevo">Nuevo:</label>
          <select name="nuevo" id="">
            <option value="si">Nuevo</option>
            <option value="no">No</option>

          </select>
          <label for="popular">Popular:</label>
          <select name="popular" id="">
            <option value="si">Popular</option>
            <option value="no">No</option>

          </select>
          

          
          
        <button>Publicar Producto</button>
        </form>
      {/* <form onSubmit={subir}>
          <input type="file"  />
          <button type="submit">subir</button>
          
    //   </form> */}
    {/* <Producto filtroNuevos={products}/> */}
      <div className='productosContainer'>
        {productos.map((producto)=><div className='productoContainer'>

          
        <div className='product'>
          
          <img src={producto.producto.img} alt="" />
          <p>Nombre: {producto.producto.nombre}</p>
          <p>Categoria: {producto.producto.categoria}</p>
          <p>id: {producto.producto.id}</p>
          <p>Descripción: {producto.producto.description}</p>
          <p>Precio: {producto.producto.precio}</p>
          <p>Popular: {producto.producto.popular}</p>
          <p>Nuevo: {producto.producto.nuevo}</p>
          <button onClick={()=>{deleteProducto(producto.id)}}><FontAwesomeIcon className='delete' icon={faTrash} /></button>
        </div>
        
        </div>)
        }
      </div>
    
    
      
      
      </div>
  )
}
