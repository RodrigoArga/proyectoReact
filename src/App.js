import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import NavBarExample from './layouts/navbar';
import Inicio from './components/inicio';
import Galeria from './components/galeria';
import Contacto from './components/contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Inicio /> } />
    <Route path='galeria' element={ <Galeria /> } />
    <Route path='contacto' element={ <Contacto /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
    </div>
  );
}

export default App;
