import { async } from "@firebase/util"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { get } from "../../api"
import { getCart, getProducts } from "../../api/productos"

const initialState ={
    productos:[],
    loading:false
}

export const obtenerProductos = createAsyncThunk("productos", async ()=>{
    const productos = await getProducts()
    return productos
})


const productosSlice = createSlice({
    name:"productos",
    initialState,
    extraReducers(builder){
        builder.addCase(obtenerProductos.pending,(state)=>{
            state.loading = true
        }).addCase(obtenerProductos.fulfilled,(state,action)=>{
            state.productos = action.payload
            state.loading = false
        })
    }
})

export default productosSlice.reducer