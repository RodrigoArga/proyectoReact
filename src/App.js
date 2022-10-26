import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Descubrí Jujuy, activá tus sentidos'}/>} />  
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
