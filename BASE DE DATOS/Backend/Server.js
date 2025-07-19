const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

// Configuración para Neon PostgreSQL
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_fO6oLuwimZ3U@ep-winter-silence-acjl8u6i-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

// Endpoint para obtener el usuario
app.get('/api/user', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT nombre FROM usuarios WHERE id = 1');
    res.json({ name: result.rows[0]?.nombre || 'Usuario' });
  } finally {
    client.release();
  }
});

// Endpoint para obtener campañas del usuario
app.get('/api/campaigns', async (req, res) => {
  const userId = 1; // puedes cambiarlo por el usuario logueado
  const client = await pool.connect();
  try {
    const result = await client.query(
      'SELECT id, nombre as name, descripcion as description FROM campañas WHERE usuario_id = $1',
      [userId]
    );
    res.json(result.rows);
  } finally {
    client.release();
  }
});

// Endpoint para probar la conexión a la base de datos
app.get('/api/test', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT 1 AS test');
    res.json(result.rows[0]);
  } finally {
    client.release();
  }
});

app.listen(3001, () => console.log('API corriendo en http://localhost:3001'));