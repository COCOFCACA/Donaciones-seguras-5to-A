import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NuevaCampaña from './Pages/NuevaCampaña';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva-campaña" element={<NuevaCampaña />} />
      </Routes>
    </Router>
  </StrictMode>,
)
