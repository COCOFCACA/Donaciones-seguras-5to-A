import React from "react";
import "./Eleccion.css"; // <-- Importa el archivo CSS"
import { Link } from 'react-router-dom';

const Eleccion = () => {
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

      {/* Título */}
      <div className="bg-white p-4">
        <h1 className="text-4xl font-bold">Productos cargados</h1>
      </div>

      {/* Encabezados de tabla */}
      <div className="bg-white px-6 py-2 flex justify-between text-lg italic">
        <span>Nombre</span>
        <span>Destino</span>
        <span>Condición</span>
      </div>

      {/* Lista de productos */}
      <div className="flex-1 bg-gray-200 mx-6 my-2 rounded-lg p-4 flex items-center justify-center text-lg font-semibold">
        NO HAY PRODUCTOS CARGADOS
      </div>

      {/* Botones */}
      <div className="flex justify-center gap-6 p-6">
        <button className="bg-gray-200 text-black px-6 py-3 rounded-xl text-xl font-medium hover:bg-gray-300 transition">
          Cargar producto +
        </button>
        <button className="bg-gray-200 text-black px-6 py-3 rounded-xl text-xl font-medium hover:bg-gray-300 transition">
          Cargar destino +
        </button>
      </div>
    </div>
  );
};

export default Eleccion;
