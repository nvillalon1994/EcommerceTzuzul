import { async } from "@firebase/util"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { get } from "../../api"
import { getCart, getProducts } from "../../api/productos"

const initialState ={
    carrito:[],
    loading:false
}


export const obtenerCarrito = createAsyncThunk("carrito",async ()=>{
    const carrito = await getCart()
    return carrito
})

const carritoSlice = createSlice({
    name:"carrito",
    initialState,
    extraReducers(builder){
        builder.addCase(obtenerCarrito.pending,(state)=>{
            state.loading = true
        }).addCase(obtenerCarrito.fulfilled,(state,action)=>{
            state.carrito = action.payload
            state.loading = false
        })
    }
})

export default carritoSlice.reducer