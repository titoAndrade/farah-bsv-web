import React from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './routes/Home/Home'
import Tablas from './routes/Tablas/Tablas'
import Panes from './routes/Panes/Panes'
import Nosotros from './routes/Nosotros/Nosotros'
import Contacto from './routes/Contacto/Contacto'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id='all'>
      
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tablas' element={<Tablas/>}/>
        <Route path='/Panes' element={<Panes/>}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
