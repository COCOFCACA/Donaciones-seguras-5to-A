import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Home';
// npm install react-router-dom
//Nico, por favor acordate que vas a tener que programar así: creas cada página y componente en un archivo distinto.
//Dentro de cada página le metes código HTML e importas el componente a utilizar, previamente programado 
// y por último en el main, renderizas solo la página

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
