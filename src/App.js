import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {CartContextProvider} from './context/CartContext'


function App() {


  return (
    <div className='App'>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Descubrí Jujuy, activá tus sentidos'}/>} />  
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>} /> 
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
