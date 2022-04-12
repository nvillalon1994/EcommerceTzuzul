import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
// import productsReducer from '../reducer/productosReducer'
import productsReducer from '../features/productos/productosSlice'
import carritoReducer from '../features/carrito/carritoSlice'

const store = configureStore({
    reducer:{
        //TODO:Agregar reducers
        user:userReducer,
        carrito:carritoReducer,
        productos:productsReducer
    }
})

export default store