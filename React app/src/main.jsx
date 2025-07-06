import React from 'react'
import { createRoot } from 'react-dom/client'
import Eleccion from './components/Eleccion'
import Carga_de_productos from './components/Carga_de_productos'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Eleccion />
  </BrowserRouter>
)