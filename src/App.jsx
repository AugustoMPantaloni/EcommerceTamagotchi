import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'

import Inicio from "./components/Inicio/inicio"
import Tienda from "./components/Tienda/Tienda"
import Misplantas from './components/MisPlantas/MisPlantas'

function App() {
  return<>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/tienda" element={<Tienda />} /> 
              <Route path="/mis-plantas" element={<Misplantas/>}/> 
            </Routes>
          </BrowserRouter>
        </> 
}

export default App
