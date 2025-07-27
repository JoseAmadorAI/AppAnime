require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta GET en la raíz (sobrescrita)
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Registro de usuario
app.post('/users/register', async (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Email, password y username son requeridos' });
  }
  try {
    const bcrypt = require('bcrypt');
    const password_hash = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users (email, username, password_hash, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id',
      [email, username, password_hash]
    );
    res.json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    if (error.code === '23505') { // Violación de restricción UNIQUE
      return res.status(409).json({ error: 'El email ya está registrado' });
    }
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Login de usuario
app.post('/users/login', async (req, res) => {
  const { email, username, password } = req.body;
  if ((!email && !username) || !password) {
    return res.status(400).json({ error: 'Se requiere email o username, y password' });
  }
  try {
    let result;
    if (email) {
      result = await db.query('SELECT username, password_hash FROM users WHERE email = $1', [email]);
    } else {
      result = await db.query('SELECT username, password_hash FROM users WHERE username = $1', [username]);
    }
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const bcrypt = require('bcrypt');
    const validPassword = await bcrypt.compare(password, result.rows[0].password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }
    res.json({ message: 'Inicio de sesión exitoso', username: result.rows[0].username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Conexión a la base de datos y arranque del servidor
(async () => {
  try {
    await db.connect();
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
})(); 