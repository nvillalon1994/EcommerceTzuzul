import { db } from "..";
import { storage } from "..";
import {addDoc, collection,doc,getDocs ,setDoc,getDoc,updateDoc ,onSnapshot,deleteDoc} from 'firebase/firestore'
import {ref ,uploadBytes,getDownloadURL} from 'firebase/storage'
import { upload } from "@testing-library/user-event/dist/upload";
let urlDescarga
export async function getProducts(){
    const productosCol = collection(db,"productos")
    const snapshot = await getDocs(productosCol)

    return snapshot.docs.map((documento)=>({...documento.data(),id:documento.id}))
}

export async function getCart(){
    const carritoCol = collection(db,"carrito")
    const snapshot = await getDocs(carritoCol)

    return snapshot.docs.map((documento)=>({...documento.data(),id:documento.id}))
}

export async function addToCart(usuario,producto,carr){
    
    const carrito=carr
    console.log(carr)
    carrito.push(producto)
    console.log(carrito)

    // await setDoc(doc(db,'carrito',usuario),{carrito})
    await addDoc(collection(db,'carrito'),{producto: {
        nombre:producto.nombre,
        description:producto.description,
        precio:producto.precio,
        categoria:producto.categoria,
        img:producto.img,
        nuevo:producto.nuevo,
        popular:producto.popular,
        id:usuario
    }})
    
    
}
export const onGetTasks = (callback)=> onSnapshot(collection(db,'carrito'),callback)
export const deleteFromCart = (id)=> deleteDoc(doc(db, "carrito",id))
export const tomarCart =(id)=> getDoc(doc(db, "carrito",id))



export async function createProducts(producto,usuario){
    console.log(producto,usuario)
    //Carrito
    // setDoc(doc(db,'productos',usuario),{producto:{producto}})
    addDoc(collection(db,'productos'),{producto})
}

export const deleteProducts = (id)=> deleteDoc(doc(db, "productos",id))
export const getTask =(id)=> getDoc(doc(db, "productos",id))


// import { db } from "..";
// import {collection,getDocs} from 'firebase/firestore'

// export async function getProducts(){
//     const peliculasCol = collection(db,"peliculas")
//     const snapshot = await getDocs(peliculasCol)

//     return snapshot.docs.map((documento)=>({...documento.data(),id:documento.id}))
// }
