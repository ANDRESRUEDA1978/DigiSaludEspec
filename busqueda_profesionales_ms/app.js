// Importar dependencias
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Configurar conexión a MongoDB
mongoose.connect('mongodb+srv://andresrueda1978:UNhQsYTW8mH8Irrh@busquedaprofesionales.ve59l.mongodb.net/?retryWrites=true&w=majority&appName=busquedaprofesionales')
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log("Error de conexión a MongoDB", err));

// Definir esquema de profesionales
const Professional = mongoose.model('Professional', new mongoose.Schema({
  nombre: String,
  especialidad: String,
  ubicacion: String
}));

// Definir endpoints de la API REST
app.get('/profesionales', async (req, res) => {
  const { especialidad, ubicacion } = req.query;
  const profesionales = await Professional.find({ especialidad, ubicacion });
  res.send(profesionales);
});

// Iniciar el servidor en el puerto 8082
app.listen(8082, () => console.log("Microservicio busqueda_profesionales_ms corriendo en puerto 8082"));
