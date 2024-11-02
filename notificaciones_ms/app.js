const express = require('express');
const app = express();

app.post('/notificaciones', (req, res) => {
  res.send("Notificación enviada");
});

app.listen(3000, () => console.log("Microservicio notificaciones_ms corriendo en AWS Lambda"));
