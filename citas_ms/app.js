// Importar dependencias
const mysql = require('mysql2');
const express = require('express');
const app = express();

// Configurar conexión a MySQL en Google Cloud SQL
const db = mysql.createConnection({
    host: '35.224.151.83',  // Cambia esto por la IP pública o el nombre de conexión de tu instancia en Google Cloud SQL
    user: 'ANDRESRUEDA1978',                  // Usuario configurado en Google Cloud SQL
    password: 'oRGHEMTYRANT1978',                 // Contraseña del usuario
    database: 'citas_db'                       // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Endpoint para obtener citas
app.get('/citas', (req, res) => {
    db.query('SELECT * FROM citas', (err, results) => {
        if (err) {
            console.error('Error al obtener citas:', err);
            res.status(500).send('Error al obtener citas');
            return;
        }
        res.send(results);
    });
});

// Endpoint para cancelar (eliminar) una cita por ID
app.delete('/citas/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM citas WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error al cancelar la cita:', err);
            res.status(500).send('Error al cancelar la cita');
            return;
        }
        res.send({ message: 'Cita cancelada', id });
    });
});

// Iniciar el servidor en el puerto 8085
app.listen(8085, () => console.log('Microservicio citas_ms corriendo en puerto 8085'));
