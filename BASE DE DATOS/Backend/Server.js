const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());

// Cambia estos datos según tu base de datos en Docker
const dbConfig = {
  host: 'localhost', // o el nombre del servicio si usas docker-compose
  user: 'root',      // tu usuario
  password: 'tu_password', // tu contraseña
  database: 'tu_basededatos', // tu base de datos
  port: 3306         // el puerto que usas en Docker
};

// Endpoint para obtener el usuario (ajusta la consulta según tu tabla)
app.get('/api/user', async (req, res) => {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT nombre FROM usuarios WHERE id = 1');
  await connection.end();
  res.json({ name: rows[0]?.nombre || 'Usuario' });
});

// Endpoint para obtener campañas del usuario (ajusta la consulta según tu tabla)
app.get('/api/campaigns', async (req, res) => {
  const userId = 1; // puedes cambiarlo por el usuario logueado
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute(
    'SELECT id, nombre as name, descripcion as description FROM campañas WHERE usuario_id = ?',
    [userId]
  );
  await connection.end();
  res.json(rows);
});

app.listen(3001, () => console.log('API corriendo en http://localhost:3001'));