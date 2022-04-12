import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Products from './pages/Products';
import Aros from './pages/Aros';
import Colgantes from './pages/Colgates';
import LLaveros from './pages/Llaveros';

import Login from './pages/Login';
import Payment from './pages/Payment';
import Product from './pages/Product';
import Carrito from './pages/Carrito';
import Register from './pages/Register';
import Crear from './pages/Crear';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Checkout from "./pages/Checkout";

function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
          {/* <Route path='/carrito' element={<Payment/>}/> */}
          <Route path='/productos' element={<Products/>}/>
          <Route path="/productos/:idProduct" element={<Product/>}/>
          <Route path='/aros' element={<Aros/>}/>
          <Route path='/colgantes' element={<Colgantes/>}/>
          <Route path='/llaveros' element={<LLaveros/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/crear' element={<Crear/>}/>
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/checkOut/:cantidadPagar" element={<Checkout />} />
          
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
