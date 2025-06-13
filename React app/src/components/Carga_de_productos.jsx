import React from "react";
import "./Carga_de_productos.css"; // <-- Importa el archivo CSS"
import { Link } from 'react-router-dom';

const Carga_de_productos = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col">
      {/* Encabezado */}
      <div className="flex justify-between items-center bg-gray-300 p-4">
        <div className="w-16 h-16 border border-black flex items-center justify-center">
          <span className="text-xl">---X----</span>
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
          <span className="text-2xl">👤</span>
        </div>
      </div>
    </div>
  );
};

export default Carga_de_productos;
